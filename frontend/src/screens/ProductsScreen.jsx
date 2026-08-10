import React from 'react';
import { useParams } from 'react-router-dom';

import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGetProductsByPublicationQuery } from '../slices/publicationsApiSlice';
import CustomCard from '../components/CustomCard';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductsScreen = () => {
  const { id: publicationId } = useParams();

  const { data: productData, isLoading, error } = useGetProductsByPublicationQuery(publicationId);

  return (
    <div>
      <Hero title='Create a New Classified' text='Start creating a classified ad by selecting a category' />

      <Container className='mt-5'>
        <Row>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message>{error?.data?.message || error.error}</Message>
          ) : (
            <>
              <Row>
                {productData.map(product => (
                  <Col md={12} lg={3} key={product._id}>
                    <Link to={`/publications/${publicationId}/${product._id}`} className='card-link'>
                      <CustomCard title={product.name} />
                    </Link>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProductsScreen;
