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
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Character,
  setSelectedCharacter,
} from '../../../store/charactersSlice';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(setSelectedCharacter(character));
    navigate(`/details/${character.id}`);
  };

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    onFavoriteClick();
  };

  return (
    <HeroesCard
      onClick={handleCardClick}
      activate={isFavorite ? 'true' : 'false'}
      key={character.id}
    >
      <HeroesImg
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
      />
      <HeroesTop>
        <Name>{character.name}</Name>
        <FavContainter onClick={handleFavoriteClick}>
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
