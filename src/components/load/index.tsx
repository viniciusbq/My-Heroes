import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Container, LoadContainer } from './styles';
import { Atom } from 'react-loading-indicators';
import { useEffect } from 'react';

export default function Loading() {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

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
