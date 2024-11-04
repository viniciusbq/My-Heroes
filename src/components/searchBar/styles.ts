import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 48.75%;
  position: relative;
  top: 50px;
  border-radius: 100px;
  background: #f99a9933;

  @media (max-width: 681px) {
    width: 60%;
    top: 10px;
  }
  @media (max-width: 613px) {
    top: -8px;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const IconContainer = styled.div`
  position: relative;
  left: 30px;
  display: flex;

  @media (max-width: 768px) {
    left: 15px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  height: 1.6875rem;
  background: transparent;
  position: relative;
  left: 30px;

  &::placeholder {
    color: #f99a99cc;
  }

  &:focus {
    outline: none;
    border-radius: 100px;
  }

  @media (max-width: 768px) {
    left: 15px;
  }
`;
