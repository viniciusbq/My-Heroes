import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  Container,
  ImgBackground,
  ShadowOverlay,
  Title,
  TitleContainer,
} from './styles';
import backgroung from '../../assets/wallpaper.webp';
import HeroeDeitalCard from './components/heroeDetailCard';
import ComicsDetails from './components/comics';

export default function HeroesDetails() {
  const character = useSelector(
    (state: RootState) => state.character.selectedCharacter
  );

  return (
    <Container>
      <ImgBackground src={backgroung} />
      <ShadowOverlay />
      <TitleContainer>
        <Title>DESCUBRA TODOS OS QUADRINHOS DESTE PERSONAGEM</Title>
      </TitleContainer>
      <HeroeDeitalCard heroe={character} />
      <ComicsDetails comics={character?.comics} />
    </Container>
  );
}
