import React from 'react';
import { Link } from 'react-router-dom';
import { LinkMailToType } from './types';
import styles from './style';

const LinkMailto = ({ mailto, label }: LinkMailToType) => {
  return (
    <Link
      to="#"
      style={styles.link}
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default LinkMailto;
