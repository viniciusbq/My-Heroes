import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Container, LoadContainer } from './styles';
import { Atom } from 'react-loading-indicators';

export default function Loading() {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <Container>
      <LoadContainer>
        <Atom
          color="#ff0000"
          size="medium"
          text="My Heroes"
          textColor="#ff0000"
        />
      </LoadContainer>
    </Container>
  );
}
