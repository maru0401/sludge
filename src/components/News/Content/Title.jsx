import { Typography } from '@mui/material';

const Title = ({title}) => {
  return (
    <Typography
      sx={{
        textAlign: 'center',
        color: '#000',
        fontSize: '20px',
        lineHeight: '1.2',
        padding: '10px'
      }}
    >
      {title}
    </Typography>
  );
};

export default Title;
