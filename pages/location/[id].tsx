import { NextPage } from 'next';
import Head from 'next/head';
import LocationScreen from '../../components/LocationScreen';
import Container from '../../components/ui/Container';
import Link from '../../components/ui/Link';
import { Character } from '../../services/interfaces';
import RickAndMortyApi from '../../services/RickAndMortyApi';

interface LocationPageProps {
  data: Character;
}

const Location: NextPage<LocationPageProps> = ({ data }) => {
  return (
    <Container>
      <Head>
        <title>{data.name}</title>
        <meta name="description" content="Rick and Morty character details" />
      </Head>
      <div className="text-left mt-2">
        <Link path='/'>Back to home</Link>
      </div>
      <div className="text-center mt-4 mb-6">
        <h1 className="text-4xl font-extrabold">{data.name}</h1>
      </div>
      <LocationScreen character={data} />
    </Container>
  );
};

export async function getServerSideProps(ctx: {
  query: Record<string, string | number>;
}) {
  const { query } = ctx;
  const { id } = query;
  const character = await RickAndMortyApi.getCharacterById(id);

  return {
    props: { data: character },
  };
}

export default Location;
