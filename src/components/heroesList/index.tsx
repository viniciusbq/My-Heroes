import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import {
  Container,
  Description,
  HeroesCard,
  HeroesImg,
  HeroesTop,
  Name,
  PaginationContainer,
  PaginationButton,
} from './styles';
import { fetchMarvelCharacters } from '../../services/marvelApi';
import { IoIosHeartEmpty } from 'react-icons/io';

interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const ITEMS_PER_PAGE = 8;

export default function HeroesList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState<Number | String | any>(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await fetchMarvelCharacters();
        setCharacters(data);
        console.log(data);
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

  const totalPages = Math.ceil(characters.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCharacters = characters.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Lógica para determinar quais números de página mostrar
  const getPaginationNumbers = () => {
    const numbers = [];
    const maxVisiblePages = 4;

    if (totalPages <= maxVisiblePages) {
      // Se o total de páginas for menor ou igual a 4, exiba todas
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
      }
    } else {
      // Exibir as primeiras 4 páginas e a última
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages, startPage + 2);

      if (startPage > 1) {
        numbers.push(1);
        if (startPage > 2) numbers.push('...'); // Adiciona '...' se não for consecutivo
      }

      for (let i = startPage; i <= endPage; i++) {
        numbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) numbers.push('...'); // Adiciona '...' se não for consecutivo
        numbers.push(totalPages);
      }
    }

    return numbers;
  };

  const paginationNumbers = getPaginationNumbers();

  return (
    <>
      <Container>
        {currentCharacters.map((character) => (
          <HeroesCard key={character.id}>
            <HeroesImg
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <HeroesTop>
              <Name>{character.name}</Name>
              <IoIosHeartEmpty size={25} color="red" />
            </HeroesTop>
            <Description>{character.description}</Description>
          </HeroesCard>
        ))}
      </Container>
      <PaginationContainer>
        <PaginationButton
          onClick={() =>
            setCurrentPage((prev: Number | String | bigint | any) =>
              Math.max(prev - 1, 1)
            )
          }
          disabled={currentPage === 1}
        >
          <FaAngleLeft />
        </PaginationButton>

        {paginationNumbers.map((page, index) => (
          <PaginationButton
            key={index}
            onClick={() => setCurrentPage(page)}
            disabled={currentPage === page}
            style={{
              backgroundColor: '#fff',
              color: '#000',
              border:
                currentPage === page
                  ? '1px solid #ff0000'
                  : '1px solid #ffffff',
              boxShadow:
                currentPage === page
                  ? '1px 1px 5px rgba(255, 255, 255, 0.5)'
                  : '1px 1px 5px rgba(0, 0, 0, 0.5)',
            }}
          >
            {page}
          </PaginationButton>
        ))}

        <PaginationButton
          onClick={() =>
            setCurrentPage((prev: Number | String | bigint | any) =>
              Math.min(prev + 1, totalPages)
            )
          }
          disabled={currentPage === totalPages}
        >
          <FaAngleRight />
        </PaginationButton>
      </PaginationContainer>
    </>
  );
}
