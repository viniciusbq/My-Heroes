import { useEffect } from 'react';
import {
  Container,
  Description,
  DetailsContainer,
  Thumb,
  Name,
} from './styles';
import { Character } from '../../../../components/heroesList';

interface IHeroeDeitalCardProps {
  heroe: Character | null;
}

export default function HeroeDeitalCard({ heroe }: IHeroeDeitalCardProps) {
  return (
    <Container>
      <Thumb
        src={`${heroe?.thumbnail.path}.${heroe?.thumbnail.extension}`}
        alt={heroe?.name}
      />
      <DetailsContainer>
        <Name>{heroe?.name}</Name>
        <Description>{heroe?.description}</Description>
      </DetailsContainer>
    </Container>
  );
}
