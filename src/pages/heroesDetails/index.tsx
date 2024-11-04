import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  BackButton,
  Container,
  ImgBackground,
  Title,
  TitleContainer,
} from './styles';
import backgroung from '../../assets/wallpaper.webp';
import HeroeDeitalCard from './components/heroeDetailCard';
import ComicsDetails from './components/comics';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function HeroesDetails() {
  const navigate = useNavigate();
  const character = useSelector(
    (state: RootState) => state.character.selectedCharacter
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <ImgBackground src={backgroung} />
      <BackButton onClick={() => navigate('/')}>
        <IoMdArrowRoundBack size={40} color="red" />
      </BackButton>
      <TitleContainer>
        <Title>DESCUBRA TODOS OS QUADRINHOS DESTE PERSONAGEM</Title>
      </TitleContainer>
      <HeroeDeitalCard heroe={character} />
      <ComicsDetails comics={character?.comics} items={[]} id={0} title={''} />
    </Container>
  );
}
