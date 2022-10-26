import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import RickAndMortyApi from '../services/RickAndMortyApi';
import { CharactersResponse } from '../services/interfaces';
import CharacterList from '../components/CharacterList';

interface HomePageProps {
  data: CharactersResponse;
}

const Home: NextPage<HomePageProps> = ({ data }) => {
  const [characters, setCharacters] = useState(data.results);
  const [page, setPage] = useState<number>(2);
  const [loading, setLoading] = useState(false);

  const handleRefetch = () => {
    if (loading) return;

    setLoading(true);
    RickAndMortyApi.getCharactersFromPage(page).then((data) => {
      if (data.results) {
        setPage(page + 1);
        setCharacters([...characters, ...data.results]);
      }

      setLoading(false);
    });
  };

  return (
    <>
      <Head>
        <title>Rick and Morty API</title>
      </Head>
      <h1>Rick and Morty App</h1>
      <div className="mt-6">
        <CharacterList characters={characters} />
        {!loading ? (
          <button onClick={handleRefetch} className="mt-8">
            Load more
          </button>
        ) : null}
      </div>
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
