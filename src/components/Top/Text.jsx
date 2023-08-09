import { Typography } from '@mui/material';
const Text = ({ Content }) => {
  return (
    <Typography
      variant='h4'
      component='h2'
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        border: '1px',
        transform: 'translate(-50%, -50%)',
        fontSize: '40px',
        lineHeight: '80px',
        color: '#fff',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
        whiteSpace: 'pre-line'
      }}
    >
      {Content}
    </Typography>
  );
};

export default Text;
