import { Typography } from '@mui/material';

const MoreText = () => {
  return (
    <a href='./news'>
      <Typography
        sx={{
          fontSize: '20px',
          textAlign: 'center',
          marginTop:'3rem'
        }}
      >
        and more...
      </Typography>
      </a>
  );
}

export default MoreText;
