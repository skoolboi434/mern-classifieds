import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CustomCard from './components/CustomCard';

const App = () => {
  return (
    <>
      <Header />

      <Outlet />
      <Footer />
    </>
  );
};

export default App;
