import { Typography } from '@mui/material';

const MoreText = () => {
  return (
    <a href='./'>
      <Typography
        sx={{
          fontSize: '20px',
          textAlign: 'center',
          marginTop:'3rem'
        }}
      >
        すべて見る
      </Typography>
      </a>
  );
}

export default MoreText;
