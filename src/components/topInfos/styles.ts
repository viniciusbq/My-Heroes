import styled from 'styled-components';
interface TagContainerProps {
  activate?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  width: 74.8125rem;
`;

export const CountHeroes = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 28.13px;
  text-align: left;
  color: #c5c5c5;
`;

export const TagContainer = styled.div<TagContainerProps>`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 0px 5px;
  justify-content: center;
  gap: 5px;
  background-color: ${({ activate }) => (activate ? '#f43735b2' : '#fff')};
  height: 3rem;
  cursor: pointer;
`;

export const TagFavorite = styled.span<TagContainerProps>`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 28.13px;
  color: ${({ activate }) => (activate ? '#fff' : '#f43735b2')};
`;
