import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const BackButton = styled.button`
  height: 3rem;
  width: 3rem;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  top: 20px;
  left: 20px;
  cursor: pointer;
  z-index: 11;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const ImgBackground = styled.img`
  height: auto;
  width: 100vw;
  position: absolute;
  z-index: -1;
`;

export const TitleContainer = styled.div`
  width: 100%;
  max-width: 73.125rem;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  position: relative;
  top: 7.5rem;
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 56.25px;
  text-align: left;
  max-width: 31rem;
  left: 10%;
  align-self: start;
  color: #fff;

  @media (max-width: 1070px) {
    font-size: 3rem;
    line-height: 40px;
    top: 7rem;
    text-align: center;
    max-width: 80vw;
  }

  @media (max-width: 517px) {
    font-size: 2.5rem;
    line-height: 32px;
  }

  @media (max-width: 432px) {
    top: 5rem;
    font-size: 1.5rem;
  }
`;
