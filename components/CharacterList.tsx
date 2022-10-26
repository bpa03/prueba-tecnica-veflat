import { FC } from 'react';
import { Character } from '../services/interfaces';
import CharacterItem from './CharacterItem';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: FC<CharacterListProps> = ({ characters }) => {
  return (
    <ul className="space-y-10">
      {characters.map((character) => (
        <CharacterItem character={character} key={character.id} />
      ))}
    </ul>
  );
};

export default CharacterList;
