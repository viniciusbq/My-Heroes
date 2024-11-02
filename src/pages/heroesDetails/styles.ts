import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const ImgBackground = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  z-index: -1;
`;

export const ShadowOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

export const TitleContainer = styled.div`
  width: 100%; /* Mudou para 100% para responsividade */
  max-width: 73.125rem; /* Limite máximo para telas grandes */
  padding: 0 2rem; /* Adiciona espaçamento nas laterais em telas menores */
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

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Reduz o tamanho da fonte em telas menores */
    line-height: 40px; /* Ajusta o espaçamento de linha */
    top: 5rem; /* Reduz a distância do topo em telas menores */
    text-align: center; /* Centraliza o texto em telas menores */
    left: 0; /* Remove a margem esquerda */
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Reduz ainda mais em telas muito pequenas */
    line-height: 32px; /* Ajusta o espaçamento de linha */
  }
`;
