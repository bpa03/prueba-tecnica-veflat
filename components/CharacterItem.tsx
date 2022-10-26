import { FC } from 'react';
import Link from 'next/link';
import { Character } from '../services/interfaces';

interface CharacterItemProps {
  character: Character;
}

const CharacterItem: FC<CharacterItemProps> = ({
  character: { location, origin, name },
}) => {
  return (
    <li>
      <div>
        <h1>{name}</h1>
        <div>
          <h2>Location</h2>
          <Link href={location.url} target="_blank">
            <h3>
              {location.name}: {location.url}
            </h3>
          </Link>
        </div>
        <div>
          <h2>Origin</h2>
          <Link href={origin.url} target="_blank">
            <h3>
              {origin.name}: {origin.url}
            </h3>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default CharacterItem;
