import React from 'react';

const Hero = ({ title, text }) => {
  return (
    <div className='hero text-center mb-3'>
      <div className='heading-container mb-3'>
        <h3 className='mb-0'>{title}</h3>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Hero;
