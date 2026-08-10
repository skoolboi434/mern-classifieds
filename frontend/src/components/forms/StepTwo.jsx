import React, { useState } from 'react';
import { Row, Col, Container, Card, Form, Button } from 'react-bootstrap';
import Hero from '../Hero';

const StepTwo = ({ nextStep, prevStep, handleFormData, values }) => {
  // set start date
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // after form submit validating the form data using
  const submitFormData = e => {
    e.preventDefault();

    nextStep();
  };

  return (
    <Container className='border border-dark rounded shadow p-3'>
      <div className='text-center my-3'>
        <p>
          Great!
          <br /> Now lets set the schedule of your ad
          <br />
          for each publication below!
        </p>
      </div>

      <Form onSubmit={submitFormData}>
        <Row className='mb-3'>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>Start Date:</Form.Label>
              <Form.Control type='date' name='startDate' value={startDate} onChange={e => setStartDate(e.target.value)} />
            </Form.Group>
          </Col>
          <Col md={12} lg={6}>
            <Form.Group>
              <Form.Label>End Date:</Form.Label>
              <Form.Control type='date' name='endDate' value={endDate} onChange={e => setEndDate(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>
        <div className='d-flex justify-content-lg-between'>
          <Button onClick={prevStep}>Previous</Button>
          <Button variant='primary' type='submit'>
            Continue
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default StepTwo;
