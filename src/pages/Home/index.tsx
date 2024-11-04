import { Container } from './styles';
import Header from '../../components/header';
import TopInfos from '../../components/topInfos';
import HeroesList from './heroesList';
import { useEffect } from 'react';

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
