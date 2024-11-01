import { Container, DataText, NameText } from './styles';

export default function Footer() {
  return (
    <Container>
      <DataText>Data provided by Marvel. © 2023 MARVEL</DataText>

      <DataText>
        Desenvolvido por <NameText>Vinícius Borba</NameText>
      </DataText>
    </Container>
  );
}
