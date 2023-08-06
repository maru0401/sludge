import { Box, Typography } from '@mui/material';

const Text = () => {
  return (
    <Box sx={{
      left: '50%',
      transform: 'translate(-50%, -50%)', position: 'absolute', top: '45%'
    }}>
      <Typography
        variant='h2'
        sx={{
          fontFamily: 'Koulen',
          textAlign: 'center',
          color: '#fff',
          fontSize: '6rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
        }}
      >
        MISSION
      </Typography>
      <Typography
        variant='h3'
        sx={{
          marginTop: '30px',
          textAlign: 'center',
          color: '#fff',
          fontSize: '30px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
          '@media (max-width: 600px)': {
            fontSize: '20px',
          },
        }}
      >
        私たちの目標は～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
      </Typography>
    </Box>
  );
};

export default Text;
