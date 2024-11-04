import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5.125rem;
  background-color: #202020;
  position: relative;
  flex-wrap: wrap;
  bottom: 0px;
`;

export const DataText = styled.span`
  font-size: 1.25rem;
  line-height: 23.44px;
  text-align: left;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 32px;
  }
`;
export const NameText = styled.span`
  color: #999999;
`;
