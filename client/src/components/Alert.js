import React from 'react';
import Wrapper from '../assets/wrappers/Alert';

const Alert = ({ alertMessage }) => {
  return (
    <Wrapper>
      <p>{alertMessage}</p>
    </Wrapper>
  );
};

export default Alert;
