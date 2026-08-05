import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomCard from '../components/CustomCard';
import Hero from '../components/Hero';
import publications from '../publications';

const ProductsScreen = () => {
  const { slug: publicationSlug } = useParams();
  const publication = publications.find(p => p.slug === publicationSlug);
  console.log(publication);

  return (
    <div>
      <Hero title='Create a New Classified' text='Start creating a classified ad by selecting a category' />

      <Container className='mt-5'>
        <Row>
          <Col md={12} lg={3}>
            <Link to={`/${publication.slug}/products`}>
              <CustomCard title='Product Title' />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductsScreen;
