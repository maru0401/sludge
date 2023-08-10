import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Link to={'../'}>
        <Button
          variant='contained'
          sx={{
            borderRadius: '50px',
            width: '100px',
            height: '30px',
            fontSize: '15px',
            backgroundColor: '#F0F0F0',
            border: '1px solid #000000',
            color: '#000000',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          ホームへ
        </Button>
      </Link>
    </Box>
  );
};

export default BackButton;
