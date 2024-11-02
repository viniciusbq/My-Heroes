import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  width: 90%;
  width: 73.125%;
  border-radius: 70px;
  box-shadow: 10px 20px 10px rgba(0, 0, 0, 0.1);
  margin: 20px auto; /* Centraliza o container */
  z-index: 1;

  &:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 15px 30px 15px rgba(0, 0, 0, 0.2);
    transition: 0.6s;
  }

  /* Media Query para telas pequenas */
  @media (max-width: 768px) {
    flex-direction: column; /* Muda para coluna em telas pequenas */
    align-items: center; /* Centraliza os itens */
  }
`;

export const ImgBackground = styled.img`
  width: 100%; /* Faz a imagem ocupar toda a largura do contêiner */
  max-width: 12.5rem; /* Limita a largura máxima */
  height: auto; /* Mantém a proporção da imagem */
  border-radius: 70px 0px 0px 70px;
  object-fit: cover;

  /* Media Query para telas pequenas */
  @media (max-width: 768px) {
    max-width: 100%; /* A imagem ocupa 100% da largura em telas pequenas */
    border-radius: 70px 70px 0 0; /* Ajusta o raio em telas pequenas */
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 4.375rem;
  margin-top: 0.625rem;

  /* Media Query para telas pequenas */
  @media (max-width: 768px) {
    margin-left: 0; /* Remove a margem à esquerda em telas pequenas */
    align-items: center; /* Centraliza os itens */
  }
`;

export const Name = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 35.16px;
  text-align: left;
  margin-top: 1.25rem;

  /* Media Query para telas pequenas */
  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reduz o tamanho da fonte em telas pequenas */
    text-align: center; /* Centraliza o texto */
  }
`;

export const Description = styled.p`
  max-width: 47.5625rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 28.13px;
  text-align: left;

  /* Media Query para telas pequenas */
  @media (max-width: 768px) {
    font-size: 1.2rem; /* Reduz o tamanho da fonte em telas pequenas */
    text-align: center; /* Centraliza o texto */
  }
`;

export const Date = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 21.09px;
  text-align: left;

  /* Media Query para telas pequenas */
  @media (max-width: 768px) {
    font-size: 1rem; /* Reduz o tamanho da fonte em telas pequenas */
    text-align: center; /* Centraliza o texto */
  }
`;

export const DateCountDiv = styled.div`
  display: flex;
  gap: 20px;

  /* Media Query para telas pequenas */
  @media (max-width: 768px) {
    flex-direction: column; /* Muda para coluna em telas pequenas */
    align-items: center; /* Centraliza os itens */
  }
`;
