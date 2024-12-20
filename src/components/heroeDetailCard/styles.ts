import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 22rem;
  align-items: center;
  margin-top: 12.4375rem;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 10px 20px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  padding: 10px 0px;
  width: 60%;

  @media (max-width: 1079px) {
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    width: 90%;
  }
  @media (max-width: 500px) {
    margin-top: 9rem;
  }
  @media (max-width: 432px) {
    margin-top: 7rem;
  }
`;

export const Thumb = styled.img`
  max-width: 18rem;
  border-radius: 50%;
  margin: 0px 2rem;
  position: relative;
  left: 0px;
  @media (max-width: 500px) {
    width: 8rem;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1070px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;
export const Name = styled.h1`
  font-size: 2.625rem;
  font-weight: 700;
  line-height: 49.22px;
  text-align: left;
  @media (max-width: 1070px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    text-align: center;
    font-size: 1.625rem;
  }
`;
export const Description = styled.p`
  max-width: 47.5625rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 28.13px;
  text-align: left;
  @media (max-width: 1070px) {
    text-align: center;
    font-size: 1.2rem;
  }
  @media (max-width: 600px) {
    text-align: center;
    font-size: 0.9rem;
    line-height: 20.13px;
  }
`;
