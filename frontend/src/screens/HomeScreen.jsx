import React, { useEffect, useState } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';

import CustomCard from '../components/CustomCard';
import { useGetPublicationsQuery } from '../slices/publicationsApiSlice';

import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Message from '../components/Message';

const HomeScreen = () => {
  const { data: publications, isLoading, isError } = useGetPublicationsQuery();

  return (
    <>
      <Hero title='Create a New Classified' text='Start creating a classified ad by selecting a Publication' />

      <Container className='mt-5'>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Message>{isError?.data?.message || isError.isError}</Message>
        ) : (
          <>
            <Row>
              {publications.map(pub => (
                <Col md={12} lg={3} key={pub._id}>
                  <Link to={`/publications/${pub._id}`} className='card-link'>
                    <CustomCard title={pub.name} />
                  </Link>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
