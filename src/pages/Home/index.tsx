import Header from '../../components/header';
import TopInfos from '../../components/topInfos';
import HeroesList from '../../components/heroesList';
import { useEffect } from 'react';
import { Container } from './styles';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Header />
      <TopInfos />
      <HeroesList />
    </Container>
  );
}
