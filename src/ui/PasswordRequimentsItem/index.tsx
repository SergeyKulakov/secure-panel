import React, { useId } from 'react';
import items from './constants';

const PasswordRequimentsItem = () => {
  return (
    <ul>
      {items.map((el) => (
        <li key={useId()}>{el}</li>
      ))}
    </ul>
  );
};

export default PasswordRequimentsItem;
