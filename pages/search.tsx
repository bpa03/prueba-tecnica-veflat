import { NextPage } from 'next';
import { useState, ChangeEvent, FormEvent } from 'react';
import CharacterList from '../components/CharacterList';
import { CharactersResponse } from '../services/interfaces';
import RickAndMortyApi from '../services/RickAndMortyApi';

interface FormValues {
  name: string;
  status: 'alive' | 'dead' | 'unknown' | '';
}

const Search: NextPage = () => {
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

    RickAndMortyApi.searchCharacters(format).then((data) => {
      if (data.results) {
        setCharacters(data);
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="border border-black"
          onChange={handleChange}
        />
        <select name="status" onChange={handleChange}>
          <option value="">Select a status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <button>Search</button>
      </form>
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
      </div>
    </div>
  );
};

export default Search;
