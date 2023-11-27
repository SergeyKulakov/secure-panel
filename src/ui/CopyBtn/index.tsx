import React from 'react';
import { IconButton } from '@mui/material';
import CopyIcon from '../../assets/img/Copy';

const CopyBtn = ({ text, fill = '#161C24' }: CopyBtn) => {
  return (
    <IconButton
      aria-label="copy"
      onClick={() => navigator.clipboard.writeText(text)}
    >
      <CopyIcon fill={fill} />
    </IconButton>
  );
};

export default CopyBtn;
