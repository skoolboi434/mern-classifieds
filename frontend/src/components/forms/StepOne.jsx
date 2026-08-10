import React, { useState } from 'react';
import { Row, Col, Container, Card, Form, Button } from 'react-bootstrap';
import Hero from '../Hero';
import { useParams } from 'react-router-dom';
import { useGetTopLevelCategoriesByProductQuery, useGetProductByIdQuery } from '../../slices/publicationsApiSlice';

const StepOne = ({ nextStep, handleFormData, values }) => {
  const { productId } = useParams();

  const { data: product } = useGetProductByIdQuery(productId);
  const { data: childCategories } = useGetTopLevelCategoriesByProductQuery(productId);

  // after form submit validating the form data using
  const submitFormData = e => {
    e.preventDefault();

    nextStep();
  };

  return (
    <>
      <Hero title={`Create a New ${product?.name} Classified`} text='Follow the steps below to start advertising' />
      <Container className='border border-dark rounded shadow p-3'>
        <div className='text-center my-3'>
          <p>
            Choose the ad category that will
            <br />
            best fit your order.
          </p>
        </div>
        <Form onSubmit={submitFormData}>
          <Form.Group className='mb-3'>
            <Form.Label>Select {product?.name} Category:</Form.Label>
            <Form.Select name='category'>
              <option value=''>Open this select menu</option>
              {childCategories?.map(category => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Continue
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default StepOne;
