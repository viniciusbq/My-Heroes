import React, { useEffect, useState } from 'react';
import { TagFavorite } from './styles';
import { fetchMarvelCharacters } from '../../services/marvelApi';

export default function HeroesList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await fetchMarvelCharacters();
        setCharacters(data);
      } catch (err) {
        setError('Erro ao carregar personagens.');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {characters.map(
        (character: {
          id: React.Key | null | undefined;
          name:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | null
            | undefined;
          thumbnail: { path: any; extension: any };
        }) => (
          <div key={character.id}>
            <TagFavorite>{character.name}</TagFavorite>
            <img
              src={`${character.thumbnail.path}/standard_small.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </div>
        )
      )}
    </div>
  );
}
