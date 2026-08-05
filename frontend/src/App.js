import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Container>Welcome</Container>
      <Footer />
    </>
  );
};

export default App;
