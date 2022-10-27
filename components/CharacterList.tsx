import { FC } from 'react';
import { Character } from '../services/interfaces';
import CharacterItem from './CharacterItem';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: FC<CharacterListProps> = ({ characters }) => {
  return (
    <ul className="gap-y-8 gap-x-10 w-full grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-3 xl:md:grid-cols-4">
      {characters.map((character) => (
        <CharacterItem character={character} key={character.id} />
      ))}
    </ul>
  );
};

export default CharacterList;
