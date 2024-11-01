import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 48.75%;
  position: relative;
  top: 50px;
  border-radius: 100px;
  background: #f99a9933;
`;

export const IconContainer = styled.div`
  position: relative;
  left: 30px;
  display: flex;
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
`;
