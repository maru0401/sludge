import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PrevButton = ({ id, now }) => {
  return (
    <>
      {id < 10 && <Button
        variant='contained'
        component={Link}
        to={`?id=${now - 10}`}
        sx={{
          borderRadius: '50px',
          width: '140px',
          height: '30px',
          fontSize: '12px',
          backgroundColor: '#F0F0F0',
          border: '1px solid #000000',
          color: '#000000',
          '&:hover': {
            backgroundColor: 'transparent',
          },
          '& a': {
            color: '#000000',
            textDecoration: 'none',
          },
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center'
        }}
      >
        PREV
      </Button>}
    </>
  );
};

export default PrevButton;
