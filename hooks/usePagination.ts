import { useState, useRef, useCallback } from 'react';
import { Character, CharactersResponse, Info } from '../services/interfaces';
import RickAndMortyApi from '../services/RickAndMortyApi';

export default function usePagination() {
  const next = useRef<string | null>('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<Info | null>(null);
  const [loading, setLoading] = useState<boolean>();

  const handleNextPage = () => {
    if (loading || !next.current) {
      return;
    }

    setLoading(true);
    RickAndMortyApi.getCharactersFromUrl(next.current).then(
      (data: CharactersResponse) => {
        if (data.results) {
          console.log(data.results);
          setCharacters([...characters, ...data.results]);
          setInfo(data.info);
          next.current = data.info.next;
        }

        setLoading(false);
      }
    );
  };

  const setData = useCallback((data: CharactersResponse) => {
    setCharacters(data.results);
    setInfo(data.info);
    next.current = data.info.next;
  }, []);

  return {
    setData,
    handleNextPage,
    isLoading: loading,
    existNextPage: !!next.current,
    characters,
    info
  };
}
