import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const BackButton = ({ text,to }) => {
  return (
      <Button
        variant='contained'
        component={Link}
        to={to}
        sx={{
          borderRadius: '50px',
          marginLeft: '15px',
          width: '150px',
          height: '30px',
          fontSize: '15px',
          backgroundColor: '#F0F0F0',
          border: '1px solid #000000',
          color: '#000000',
          '&:hover': {
            backgroundColor: 'transparent'
          },
        }}
      >
        {text}
      </Button>
  );
};

export default BackButton;
