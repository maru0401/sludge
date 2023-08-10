import { Typography } from '@mui/material';

const Title = ({ title }) => {
  return (
    <Typography
      variant='h4'
      sx={{
       margin:'20px'
      }}
    >
      {title}
    </Typography>
  );
}

export default Title;
