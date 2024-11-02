import styled from 'styled-components';
import { TagContainerProps } from '../../types';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 60vw;
  flex-wrap: wrap;

  @media (max-width: 823px) {
    height: auto;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const CountHeroes = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 28.13px;
  text-align: left;
  color: #c5c5c5;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const TagContainer = styled.div<TagContainerProps>`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0px 5px;
  justify-content: center;
  gap: 5px;
  background-color: ${({ activate }) =>
    activate == 'true' ? '#f43735b2' : '#fff'};
  height: 3rem;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 2.5rem;
    padding: 0px 3px;
  }
`;

export const TagFavorite = styled.span<TagContainerProps>`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 28.13px;
  color: ${({ activate }) => (activate == 'true' ? '#fff' : '#f43735b2')};

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
