import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import CustomCard from '../components/CustomCard';

import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const HomeScreen = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      const { data } = await axios.get('/api/publications');
      setPublications(data);
    };

    fetchPublications();
  }, []);

  console.log(publications);
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
