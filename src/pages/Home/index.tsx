import { Container } from './styles';
import Header from '../../components/header';
import TopInfos from '../../components/topInfos';
import HeroesList from '../../components/heroesList';

export default function Home() {
  return (
    <Container>
      <Header />
      <TopInfos />
      <HeroesList />
    </Container>
  );
}
