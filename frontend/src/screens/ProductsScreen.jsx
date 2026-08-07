import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGetPublicationByIdQuery } from '../slices/publicationsApiSlice';
import CustomCard from '../components/CustomCard';
import Hero from '../components/Hero';

const ProductsScreen = () => {
  const { id: publicationId } = useParams();

  const { data: publication, isLoading, error } = useGetPublicationByIdQuery(publicationId);

  console.log(publication);

  return (
    <div>
      <Hero title='Create a New Classified' text='Start creating a classified ad by selecting a category' />

      <Container className='mt-5'>
        <Row>
          <Col md={12} lg={3}>
            <Link>
              <CustomCard title='Product Title' />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductsScreen;
