import { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import RickAndMortyApi from '../services/RickAndMortyApi';
import { CharactersResponse } from '../services/interfaces';
import CharacterList from '../components/CharacterList';
import Container from '../components/ui/Container';
import usePagination from '../hooks/usePagination';
import Button from '../components/ui/Button';
import Link from '../components/ui/Link';
import Spinner from '../components/ui/Spinner';

interface HomePageProps {
  data: CharactersResponse;
}

const Home: NextPage<HomePageProps> = ({ data }) => {
  const { handleNextPage, loadingPage, setData, characters, existNextPage } =
    usePagination();

  useEffect(() => {
    setData(data);
  }, [data, setData]);

  return (
    <>
      <Head>
        <title>Rick and Morty API</title>
      </Head>
      <Container>
        <div className="text-center mt-4 mb-6">
          <h1 className="text-4xl font-extrabold">
            Rick and Morty App
          </h1>
        </div>
        <div className="my-4 text-left">
          <Link path="/search">Search</Link>
        </div>
        <div className="mt-6">
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
    </>
  );
};

export async function getServerSideProps() {
  const data = await RickAndMortyApi.getAllCharacters();
  return {
    props: {
      data,
    },
  };
}

export default Home;
