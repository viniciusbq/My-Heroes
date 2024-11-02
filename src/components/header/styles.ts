import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: flex-end;
  height: 20.25rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 14.875rem;
`;

export const Title = styled.h1`
  font-size: 2.1875rem;
  font-weight: 900;
  line-height: 3.5156rem;
  text-align: center;
  color: #000;
`;
export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.7581rem;
  text-align: center;
  color: #21212199;
  @media (max-width: 615px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 10px;
  }
`;
