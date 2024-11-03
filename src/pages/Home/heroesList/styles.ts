import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 50%;
  justify-content: center;
  gap: 16px;

  @media (max-width: 1156px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 861px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 564px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const HeroesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 21.125rem;
  border: 1px solid #c6c6c6;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    background-color: #c6c6c6;
  }
`;

export const HeroesImg = styled.img`
  width: 14.8844rem;
  margin-top: 1.5rem;
  height: 10.5625rem;
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

export const FavContainter = styled.div``;

export const HeroesTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Name = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 28.13px;
  text-align: left;
  color: #000;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

export const Description = styled.span`
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 18.75px;
  color: #000;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  max-width: 100%;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  margin: 20px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const PaginationButton = styled.button`
  border: none;
  width: 2.6675rem;
  height: 2.25rem;
  margin: 0px 10px;
  border-radius: 5px;
  background-color: red;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    width: 2rem;
    height: 1.75rem;
  }
`;
