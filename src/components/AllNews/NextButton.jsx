import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NextButton = ({ id }) => {
  console.log(id)
  return (
    <>
      {id === 10 && <Button
        variant='contained'
        component={Link}
        to={`/news?id=${id}`}
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
        Next
      </Button>}
    </>
  );
};

export default NextButton;
