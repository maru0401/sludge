import { Typography } from '@mui/material';

const Date = ({ date }) => {
  return (
    <Typography
      sx={{
        margin: '20px',
        color: 'gray',
        fontSize: '12px'
      }}
    >
      {date}
    </Typography>
  );
};

export default Date;
