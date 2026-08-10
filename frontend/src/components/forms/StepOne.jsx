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
          <div className='d-flex justify-content-lg-end'>
            <Button variant='primary' type='submit'>
              Continue
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default StepOne;
