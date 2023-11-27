import React from 'react';
import BoldTypography from '../BoldTypography';
import PasswordRequimentsItem from '../PasswordRequimentsItem';
import styles from './style';

const PasswordRequiments = () => {
  return (
    <div style={styles.passwordRequirmentsWrapper}>
      <BoldTypography text="Password requirements:" />
      <PasswordRequimentsItem />
    </div>
  );
};

export default PasswordRequiments;
