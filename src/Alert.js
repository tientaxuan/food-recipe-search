import React from 'react';

const Alert = ({ error }) => {
  if (error) return <h2>OOP NOT FOUND!</h2>;
  return null;
};

export default Alert;
