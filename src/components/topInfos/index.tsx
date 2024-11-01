import React from 'react';
import { Container, CountHeroes, TagContainer, TagFavorite } from './styles';
import { FaHeart } from 'react-icons/fa';

export default function TopInfos() {
  return (
    <Container>
      <CountHeroes>Encontrados 12 Heróis</CountHeroes>
      <TagContainer>
        <FaHeart size={'1.5rem'} color="#f43735b2" />
        <TagFavorite>Somente favoritos</TagFavorite>
      </TagContainer>
    </Container>
  );
}
