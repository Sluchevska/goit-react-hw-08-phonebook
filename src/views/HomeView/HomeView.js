import React from 'react';
import { Container, Title } from './HomeView.styled';


const HomeView = () => (
  <Container >
    <Title >
      Welcom to your Personal Phone Book{' '}
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </Title>
  </Container>
);

export default HomeView;