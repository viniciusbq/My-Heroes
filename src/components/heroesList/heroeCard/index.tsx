import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoIosHeartEmpty } from 'react-icons/io';
import {
  HeroesCard,
  HeroesImg,
  HeroesTop,
  Name,
  FavContainter,
  Description,
} from './styles';
import { Character } from '..';

interface IHeroeCardPros {
  character: Character;
  isFavorite: boolean;
  onFavoriteClick: () => void;
}

export default function HeroeCard({
  character,
  isFavorite,
  onFavoriteClick,
}: IHeroeCardPros) {
  return (
    <HeroesCard key={character.id}>
      <HeroesImg
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <HeroesTop>
        <Name>{character.name}</Name>
        <FavContainter onClick={onFavoriteClick}>
          {isFavorite ? (
            <FaHeart size={25} color="red" />
          ) : (
            <IoIosHeartEmpty size={25} color="red" />
          )}
        </FavContainter>
      </HeroesTop>
      <Description>{character.description}</Description>
    </HeroesCard>
  );
}
