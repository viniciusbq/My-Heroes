import styled from 'styled-components';
import { TagContainerProps } from '../../../../types';

export const HeroesCard = styled.div<TagContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17.0625rem;
  height: 21.125rem;
  border: 1px solid #c6c6c6;
  border-radius: 10px;
  cursor: pointer;

  background: ${({ activate }) =>
    activate == 'true'
      ? 'linear-gradient(135deg, #1FAB89, #c0c0c0, #D7FBE8);'
      : '#fff'};

  &:hover {
    transform: scale(1.02);
    background-color: ${({ activate }) =>
      activate == 'true' ? 'red' : '#c6c6c6'};
  }
`;
export const HeroesImg = styled.img`
  width: 14.8844rem;
  margin-top: 1.5rem;
  height: 10.5625rem;
  border: 0px solid #c6c6c6;
  border-radius: 10px;
`;

export const FavContainter = styled.div``;
export const HeroesTop = styled.div`
  display: flex;
  width: 14.8844rem;
  justify-content: space-between;
  margin-top: 15px;
`;

export const Name = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 28.13px;
  text-align: left;
  color: #000;
`;

export const Description = styled.span`
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 400;
  width: 14.8844rem;
  line-height: 18.75px;
  color: #000;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  max-width: 100%;
`;
export const PaginationContainer = styled.div`
  display: flex;
  margin: 20px;
  width: 74.8125rem;
  justify-content: flex-end;
  align-items: flex-start;
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
`;
