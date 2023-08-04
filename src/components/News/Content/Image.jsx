import { Box } from '@mui/material';

const Image = props => {
  return (
    <Box
      sx={{
        width: '300px',
        height: '160px',
        backgroundImage: `url(${props.webp})`,
        backgroundSize: '200px 150px',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
};

export default Image;
