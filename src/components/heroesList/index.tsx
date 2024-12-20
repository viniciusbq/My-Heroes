import { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import {
  Container,
  PaginationContainer,
  PaginationButton,
  NoCharacter,
} from './styles';
import { fetchMarvelCharacters } from '../../services/marvelApi';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../store/loadingSlice';
import { addFavorite, removeFavorite } from '../../store/favoriteSlice';
import {
  setCharacters,
  setCurrentCharactersLength,
} from '../../store/charactersSlice';
import HeroeCard from '../heroeCard';
import { RootState } from '../../store/store';
import { Character } from '../../types';
import { setCurrentPage } from '../../store/paginationSlice';

const ITEMS_PER_PAGE = 8;

export default function HeroesList() {
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const currentPage = useSelector(
    (state: RootState) => state.currentPage.currentPage
  );
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const showFavorites = useSelector(
    (state: RootState) => state.favorites.showFavorites
  );
  const characters = useSelector(
    (state: RootState) => state.character.character
  );
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  useEffect(() => {
    const fetchCharacters = async () => {
      dispatch(setLoading(true));

      try {
        const data = await fetchMarvelCharacters();
        dispatch(setCharacters(data));
      } catch (err) {
        setError('Erro ao carregar personagens. Atualize a página');
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [searchTerm]);

  const filteredCharacters = characters.filter((char: Character) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const displayCharacters = !showFavorites ? filteredCharacters : favorites;

  const totalPages = Math.ceil(displayCharacters.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCharacters = displayCharacters.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    dispatch(setCurrentCharactersLength(displayCharacters));
  }, [displayCharacters, dispatch]);

  const getPaginationNumbers = () => {
    const numbers = [];
    const maxVisiblePages = 4;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
      }
    } else {
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages, startPage + 2);

      if (startPage > 1) {
        numbers.push(1);
        if (startPage > 2) numbers.push('...');
      }

      for (let i = startPage; i <= endPage; i++) {
        numbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) numbers.push('...');
        numbers.push(totalPages);
      }
    }

    return numbers;
  };

  const paginationNumbers = getPaginationNumbers();

  const handleFavoriteClick = (character: Character) => {
    const isFavorite = favorites.some(
      (fav: { id: number }) => fav.id === character.id
    );

    if (isFavorite) {
      dispatch(removeFavorite(character.id));
    } else {
      dispatch(addFavorite(character));
    }
  };

  if (error) return <div>{error}</div>;

  return (
    <>
      {currentCharacters.length > 0 ? (
        <>
          <Container>
            {currentCharacters.map((character: Character) => (
              <HeroeCard
                key={character.id}
                character={character}
                isFavorite={favorites.some(
                  (fav: { id: number }) => fav.id === character.id
                )}
                onFavoriteClick={() => handleFavoriteClick(character)}
              />
            ))}
          </Container>
          <PaginationContainer>
            <PaginationButton
              onClick={() =>
                dispatch(setCurrentPage(Math.max(currentPage - 1, 1)))
              }
              disabled={currentPage === 1}
            >
              <FaAngleLeft />
            </PaginationButton>

            {paginationNumbers.map((page, index) => (
              <PaginationButton
                key={index}
                onClick={() =>
                  typeof page === 'number' && dispatch(setCurrentPage(page))
                }
                disabled={currentPage === page || page === '...'}
                style={{
                  backgroundColor: '#fff',
                  color: '#000',
                  border:
                    currentPage === page && page.toString() !== '...'
                      ? '1px solid #ff0000'
                      : page === '...'
                      ? 'none'
                      : '1px solid #ffffff',
                  boxShadow:
                    currentPage === page && page.toString() !== '...'
                      ? '1px 1px 5px rgba(255, 255, 255, 0.5)'
                      : page === '...'
                      ? 'none'
                      : '1px 1px 5px rgba(0, 0, 0, 0.5)',
                }}
              >
                {page}
              </PaginationButton>
            ))}

            <PaginationButton
              onClick={() =>
                dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)))
              }
              disabled={currentPage === totalPages}
            >
              <FaAngleRight />
            </PaginationButton>
          </PaginationContainer>
        </>
      ) : (
        <>
          <NoCharacter>Nenhum personagem encontrado.</NoCharacter>
        </>
      )}
    </>
  );
}
