import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const RoundedButton = ({ id }) => {
  return (
    <Link to={`detail?id=${id}`}>
      <Button
        variant='contained'
        size='large'
        sx={{
          position: 'absolute',
          borderRadius: '50px',
          top: '245px',
          marginLeft: '15px',
          width: '170px',
          height: '40px',
          fontSize: '1.2rem',
          backgroundColor: '#F0F0F0',
          border: '1px solid #000000',
          color: '#000000',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        詳しく見る→
      </Button>
    </Link>
  );
};

export default RoundedButton;
