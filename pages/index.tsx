import { NextPage } from 'next';
import Head from 'next/head';
import RickAndMortyApi from '../services/RickAndMortyApi';
import { AllCharactersResponse } from '../services/interfaces';
import CharacterList from '../components/CharacterList';

interface HomePageProps {
  data: AllCharactersResponse;
}

const Home: NextPage<HomePageProps> = ({ data }) => {
  const { results } = data;

  return (
    <>
      <Head>
        <title>Rick and Morty API</title>
      </Head>
      <h1>Rick and Morty App</h1>
      <div className="mt-6">
        <CharacterList characters={results} />
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
