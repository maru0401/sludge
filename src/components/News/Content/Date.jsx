import { Typography } from '@mui/material';

const Date = ({date}) => {
  return (
    <Typography
      sx={{
        textAlign: 'left',
        color: 'gray',
        fontSize: '12px',
        marginLeft:'10px'
      }}
    >
      {date}
    </Typography>
  );
};

export default Date;
