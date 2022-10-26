import { NextPage } from 'next';
import { useState, ChangeEvent, FormEvent } from 'react';
import CharacterList from '../components/CharacterList';
import { Character } from '../services/interfaces';
import RickAndMortyApi from '../services/RickAndMortyApi';

const Search: NextPage = () => {
  const [search, setSearch] = useState<string>('');
  const [characters, setCharacters] = useState<Character[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    RickAndMortyApi.searchCharacters(search).then((data) => {
      setCharacters(data.results);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-black"
          onChange={handleChange}
        />
        <button>
          Search
        </button>
      </form>
      <div className="mt-6">
        <CharacterList characters={characters} />
      </div>
    </div>
  );
};

export default Search;
