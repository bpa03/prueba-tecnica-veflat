import { FC } from 'react';
import Link from 'next/link';
import { Character } from '../services/interfaces';

const getIdFromUrl = (url: string) => {
  const formattedUrl = url.split('/');

  if (url.length <= 1) {
    return '';
  }

  return formattedUrl[formattedUrl.length - 1];
};

interface CharacterItemProps {
  character: Character;
}

const CharacterItem: FC<CharacterItemProps> = ({
  character: { location, origin, name, id },
}) => {
  const originId = getIdFromUrl(origin.url);
  const locationId = getIdFromUrl(location.url);

  return (
    <li>
      <div className="space-y-2">
        <h1>{name} {id}</h1>
        <div>
          <h2 className="text-xl">Location</h2>
          {locationId ? (
            <Link href={`location/${locationId}`}>
              <h3>{location.name}</h3>
            </Link>
          ) : (
            <h3>{location.name}</h3>
          )}
        </div>
        <div>
          <h2 className="text-xl">Origin</h2>
          {originId ? (
            <Link href={`location/${originId}`}>
              <h3>{location.name}</h3>
            </Link>
          ) : (
            <h3>{location.name}</h3>
          )}
        </div>
      </div>
    </li>
  );
};

export default CharacterItem;
