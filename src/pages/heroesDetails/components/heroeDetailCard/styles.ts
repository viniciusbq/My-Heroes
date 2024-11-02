import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #fff;
  height: 21.1881rem;
  width: 73.125rem;
  border-radius: 70px;
  margin-top: 12.4375rem;
  box-shadow: 10px 20px 10px rgba(0, 0, 0, 0.1);
  align-items: center;
  z-index: 1;
`;
export const Thumb = styled.img`
  width: 12.5rem;
  height: 13.2844rem;
  border-radius: 50%;
  margin: 0px 2rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Name = styled.h1`
  font-size: 2.625rem;
  font-weight: 700;
  line-height: 49.22px;
  text-align: left;
`;
export const Description = styled.p`
  max-width: 47.5625rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 28.13px;
  text-align: left;
`;
