import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import CustomCard from '../components/CustomCard';
import publications from '../publications';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const HomeScreen = () => {
  return (
    <>
      <Hero title='Create a New Classified' text='Start creating a classified ad by selecting a Publication' />

      <Container className='mt-5'>
        <Row>
          {publications.map(pub => (
            <Col md={12} lg={3} key={pub._id}>
              <Link to={`/publications/${pub.slug}`} className='card-link'>
                <CustomCard title={pub.name} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
