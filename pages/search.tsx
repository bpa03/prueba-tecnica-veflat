import { useState } from 'react';
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
import Spinner from '../components/ui/Spinner';

const Search: NextPage = () => {
  const {
    handleNextPage,
    loadingPage,
    setData,
    characters,
    existNextPage,
    info,
  } = usePagination();
  const [loading, setLoading] = useState(false);

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

    setLoading(true);
    RickAndMortyApi.searchCharacters(format).then((data) => {
      if (data.results) {
        setLoading(false);
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
          {loading ? (
            <div className="w-full flex justify-center py-20">
              <Spinner />
            </div>
          ) : null}
          {characters ? (
            <CharacterList characters={characters} />
          ) : null}
          <div className="flex justify-center pt-10">
            {!loadingPage && existNextPage ? (
              <div className="w-max">
                <Button onClick={handleNextPage}>
                  Load more characters
                </Button>
              </div>
            ) : null}
            {loadingPage ? <Spinner /> : null}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Search;
