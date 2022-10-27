import { NextPage } from 'next';
import Head from 'next/head';
import CharacterList from '../components/CharacterList';
import Container from '../components/ui/Container';
import RickAndMortyApi from '../services/RickAndMortyApi';
import Button from '../components/ui/Button';
import usePagination from '../hooks/usePagination';
import SearchForm from '../components/SearchForm';
import Badges from '../components/ui/Badges';
import Link from '../components/ui/Link';

const Search: NextPage = () => {
  const {
    handleNextPage,
    isLoading,
    setData,
    characters,
    existNextPage,
    info,
  } = usePagination();

  const handleSubmit = (values: { name: string; status: string }) => {
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
        setData(data);
      }
    });
  };

  return (
    <div>
      <Head>
        <title>Search Characters</title>
        <meta
          name="description"
          content="Search for serveral or a single character from the Rick an Morty serie"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
      </Head>
      <Container>
        <div className="flex justify-start">
          <Link path="/">Home</Link>
        </div>
        <div className="flex justify-center">
          <SearchForm submitCallback={handleSubmit} />
        </div>
        {info && (
          <div className="my-6">
            <div className="space-x-3">
              <Badges>Count: {info.count}</Badges>
              <Badges>Pages: {info.pages}</Badges>
            </div>
          </div>
        )}
        <div className="mt-6">
          {characters ? (
            <CharacterList characters={characters} />
          ) : null}
          {!isLoading && existNextPage ? (
            <div className="flex justify-center pt-10">
              <div className="w-max">
                <Button onClick={handleNextPage}>
                  Load more characters
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default Search;
