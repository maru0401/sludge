import { Typography } from '@mui/material';

const Text = () => {
  return (
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
  );
};

export default Text;
