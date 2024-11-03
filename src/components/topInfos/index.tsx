import { Container, CountHeroes, TagContainer, TagFavorite } from './styles';
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setShowFavorites } from '../../store/favoriteSlice';
import { RootState } from '../../store/store';
import { setCurrentPage } from '../../store/paginationSlice';

export default function TopInfos() {
  const showFavorites = useSelector(
    (state: RootState) => state.favorites.showFavorites
  );
  const currentCharacterLength = useSelector(
    (state: RootState) => state.character.currentCharacterLength
  );

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setShowFavorites(!showFavorites));
    dispatch(setCurrentPage(1));
  };

  return (
    <Container>
      <CountHeroes>
        Encontrado{currentCharacterLength > 1 ? 's ' : ' '}
        {currentCharacterLength}
        {currentCharacterLength > 1 ? ' heróis' : ' herói'}
      </CountHeroes>
      {currentCharacterLength > 0 && (
        <TagContainer
          activate={showFavorites ? 'true' : 'false'}
          onClick={handleClick}
        >
          <FaHeart
            size={'1.5rem'}
            color={!showFavorites ? ' #f43735b2' : '#fff'}
          />
          <TagFavorite activate={showFavorites ? 'true' : 'false'}>
            Somente favoritos
          </TagFavorite>
        </TagContainer>
      )}
    </Container>
  );
}
