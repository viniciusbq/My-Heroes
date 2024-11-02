import { Character } from '../../../../store/charactersSlice';
import { truncateDescription } from '../../../../utils/trunkDescription';
import {
  Container,
  Description,
  DetailsContainer,
  Thumb,
  Name,
} from './styles';

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
        <Description>
          {heroe?.description
            ? truncateDescription(heroe?.description as string)
            : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'}
        </Description>
      </DetailsContainer>
    </Container>
  );
}
