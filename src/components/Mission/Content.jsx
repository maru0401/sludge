import { Typography } from '@mui/material';

const Content = ({content}) => {
  return (
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
     {content}
    </Typography>
  );
};

export default Content;
