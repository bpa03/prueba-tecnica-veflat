import { NextPage } from 'next';
import { AllCharactersResponse } from '../services/interfaces';
import RickAndMortyApi from '../services/RickAndMortyApi';

interface HomePageProps {
  data: AllCharactersResponse;
}

const Home: NextPage<HomePageProps> = ({ data }) => {
  return (
    <h1>
      Home
    </h1>
  )
}

export async function getServerSideProps() {
  const data = await RickAndMortyApi.getAllCharacters();
  return {
    props: {
      data
    }
  }
}

export default Home;