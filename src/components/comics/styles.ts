import styled from 'styled-components';

export const ContWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 70px;
  box-shadow: 10px 20px 10px rgba(0, 0, 0, 0.1);
  margin: 20px 0px;
  z-index: 1;
  width: 60%;

  @media (max-width: 1070px) {
    padding: 10px 0px;
    justify-content: center;
    flex-wrap: wrap;
    width: calc(50% - 40px);
    height: auto;
    margin: 10px;
    border-radius: 20px;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ImgBackground = styled.img`
  width: 12.5rem;
  height: auto;
  border-radius: 70px 0px 0px 70px;
  object-fit: cover;
  left: 0;
  @media (max-width: 1070px) {
    border-radius: 20px;
    height: 50%;
  }
  @media (max-width: 500px) {
    height: 10rem;
    width: 6rem;
    top: 1rem;
    object-fit: fill;
    position: relative;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 4.375rem;
  margin-top: 0.625rem;
  @media (max-width: 1070px) {
    margin-left: 20px;
    width: 80%;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    align-items: center;
    margin-top: 0rem;
  }
`;

export const Name = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 2.1975rem;
  text-align: left;
  margin-top: 1.25rem;

  @media (max-width: 1070px) {
    font-size: 1.6rem;
    text-align: center;
  }
  @media (max-width: 600px) {
    text-align: center;
    line-height: 1.5rem;
    font-size: 1rem;
  }
`;

export const Description = styled.p`
  max-width: 47.5625rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 28.13px;
  text-align: left;

  @media (max-width: 1070px) {
    font-size: 1rem;
    text-align: center;
  }
  @media (max-width: 600px) {
    text-align: center;
    line-height: 1rem;
    font-size: 0.8rem;
  }
`;

export const Date = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 21.09px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;

export const DateCountDiv = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1070px) {
    justify-content: center;
    align-items: center;
  }
`;
