import { NextPage } from 'next';
import { LocationResponse } from '../../services/interfaces';
import RickAndMortyApi from '../../services/RickAndMortyApi';

interface LocationPageProps {
  data: LocationResponse;
}

const Location: NextPage<LocationPageProps> = ({
  data: { name, dimension },
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{dimension}</h1>
    </div>
  );
};

export async function getServerSideProps(ctx: {
  query: Record<string, string | number>;
}) {
  const { query } = ctx;
  const { id } = query;
  const location = await RickAndMortyApi.getLocationById(id);

  return {
    props: { data: location },
  };
}

export default Location;
