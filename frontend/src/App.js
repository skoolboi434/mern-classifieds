import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <Header />
      <Hero title='Create a New Classified' text='Start creating a classified ad by selecting a Publication' />
      <Container>Welcome</Container>
      <Footer />
    </>
  );
};

export default App;
