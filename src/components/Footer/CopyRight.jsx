import { Typography } from '@mui/material';

const CopyRight = ({Text}) => {
  return (
    <Typography
      sx={{
        position: 'relative',
        fontSize: '15px',
        fontFamily: 'Koulen',
        marginLeft: '70px'
      }}
    >
      {Text}
    </Typography>
  );
}

export default CopyRight;
