import { Container, CountHeroes, TagContainer, TagFavorite } from './styles';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setShowFavorites } from '../../store/favoriteSlice';

export default function TopInfos() {
  const showFavorites = useSelector(
    (state: any) => state.favorites.showFavorites
  );
  const character = useSelector((state: any) => state.character.character);
  const currentCharacterLength = useSelector(
    (state: any) => state.character.currentCharacterLength
  );

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setShowFavorites(!showFavorites));
  };

  return (
    <Container>
      <CountHeroes>
        Encontrado{currentCharacterLength > 1 ? 's ' : ' '}
        {currentCharacterLength}
        {currentCharacterLength > 1 ? ' heróis' : ' herói'}
      </CountHeroes>
      <TagContainer activate={showFavorites} onClick={handleClick}>
        <FaHeart
          size={'1.5rem'}
          color={!showFavorites ? ' #f43735b2' : '#fff'}
        />
        <TagFavorite activate={showFavorites}>Somente favoritos</TagFavorite>
      </TagContainer>
    </Container>
  );
}
