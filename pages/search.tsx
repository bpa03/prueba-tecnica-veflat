import { NextPage } from 'next';
import { useState, ChangeEvent, FormEvent } from 'react';
import CharacterList from '../components/CharacterList';
import { CharactersResponse } from '../services/interfaces';
import Container from '../components/ui/Container';
import RickAndMortyApi from '../services/RickAndMortyApi';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';

interface FormValues {
  name: string;
  status: 'alive' | 'dead' | 'unknown' | '';
}

const Search: NextPage = () => {
  const [next, setNext] = useState<string>('');
  const [characters, setCharacters] = useState<CharactersResponse | null>(
    null
  );
  const [values, setValues] = useState<FormValues>({
    name: '',
    status: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    let format = '';
    const { name, status } = values;

    if (name !== '') {
      format += `name=${name}`;
    }

    if (status !== '') {
      format += `&status=${status}`;
    }

    if (format === '') {
      return;
    }

    RickAndMortyApi.searchCharacters(format).then((data) => {
      if (data.results) {
        setCharacters(data);
        setNext(data.info.next);
      }
    });
  };

  const handleNextPage = () => {
    fetch(next)
      .then((res) => res.json())
      .then((data: CharactersResponse) => {
        setCharacters((prevState) => ({
          info: data.info,
          results: [...prevState?.results || [], ...data.results]
        }));
        setNext(data.info.next)
      });
  };

  return (
    <div>
      <Container>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit}>
            <div className="md:w-96 space-y-5">
              <Input
                type="text"
                name="name"
                handleChange={handleChange}
                label="Find by name"
              />
              <Select
                name="status"
                handleChange={handleChange}
                id="status"
                label="Choose an status"
              >
                <>
                  <option value="">Choose a status</option>
                  <option value="alive">Alive</option>
                  <option value="dead">Dead</option>
                  <option value="unknown">Unknown</option>
                </>
              </Select>
              <Button type="submit">Search</Button>
            </div>
          </form>
        </div>
        {characters && (
          <div className="mt-6">
            <div>
              <h3>Count: {characters.info.count}</h3>
              <h3>Pages: {characters.info.pages}</h3>
            </div>
          </div>
        )}
        <div className="mt-6">
          {characters && characters.results ? (
            <CharacterList characters={characters?.results} />
          ) : null}
          {next && (
            <div className="flex justify-center pt-10">
              <div className="w-max">
                <Button onClick={handleNextPage}>Load more characters</Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Search;
