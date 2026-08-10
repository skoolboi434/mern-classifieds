import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Container, Card, Form } from 'react-bootstrap';
import Hero from '../components/Hero';
import StepOne from '../components/forms/StepOne';
import StepTwo from '../components/forms/StepTwo';
import StepThree from '../components/forms/StepThree';
import Final from '../components/forms/Final';
import { useGetProductByIdQuery } from '../slices/publicationsApiSlice';

const SingleProductScreen = () => {
  const { productId } = useParams();
  const { data: product } = useGetProductByIdQuery(productId);
  // state for steps
  const [step, setStep] = useState(1);

  // state for form data
  const [formData, setFormData] = useState({
    category: '',
    startDate: '',
    endDate: '',
    title: '',
    content: '',
    saleAddress: '',
    saleCity: '',
    saleState: '',
    saleZipCode: ''
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setStep(step + 1);
  };

  // function for going back to previous step by decreasing step state by 1
  const prevStep = () => {
    setStep(step - 1);
  };

  // handle form input data by taking onChange value and updating our previous from data state
  const handleInputData = input => e => {
    // input value from form
    const { value } = e.target;

    // updating form data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
  };

  // javascript switch case to show different form in each step
  switch (step) {
    // Case 1: show stepOne form and passing nextStep, prevStep and handleInputData as handle
    case 1:
      return (
        <>
          <Hero title={`Create a New ${product?.name} Classified`} text='Follow the steps below to start advertising' />
          <div className='classified-ad-form'>
            <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
          </div>
        </>
      );
    // show step two form passing nextStep, prevStep and handleInputData as handleForm
    case 2:
      return (
        <>
          <Hero title={`Create a New ${product?.name} Classified`} text='Follow the steps below to start advertising' />
          <div className='classified-ad-form'>
            <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
          </div>
        </>
      );
    case 3:
      return (
        <div className='classified-ad-form'>
          <Container>
            <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
          </Container>
        </div>
      );
    case 4:
      return (
        <div className='classified-ad-form'>
          <Container>
            <Final nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
          </Container>
        </div>
      );
    // default case to show nothing
    default:
      return <div className='classified-ad-form'></div>;
  }
};

export default SingleProductScreen;
