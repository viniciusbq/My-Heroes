import React from 'react';
import { Container } from './styles';
import Footer from '../../components/footer';
import Header from '../../components/header';
import TopInfos from '../../components/topInfos';
import HeroesList from '../../components/heroesList';

export default function Home() {
  return (
    <Container>
      <Header />
      <TopInfos />
      <HeroesList />
      <Footer />
    </Container>
  );
}
