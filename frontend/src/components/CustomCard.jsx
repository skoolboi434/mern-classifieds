import React from 'react';
import { Card } from 'react-bootstrap';

const CustomCard = ({ title }) => {
  return (
    <Card className='custom-card card p-3'>
      <h3 className='mb-0 text-capitalize'>{title}</h3>
    </Card>
  );
};

export default CustomCard;
