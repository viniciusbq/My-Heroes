import SearchBar from './components/searchBar';
import { Container, Content, Subtitle, Title } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Title>EXPLORE O UNIVERSO E CRIE SUA EQUIPE</Title>
        <Subtitle>
          Os melhores personagens já feitos em quadrinhos. Fique viciado em uma
          generosa porção de heróis e vilões!
        </Subtitle>
        <SearchBar />
      </Content>
    </Container>
  );
}
