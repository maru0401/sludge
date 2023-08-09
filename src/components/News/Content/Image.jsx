import { Box } from '@mui/material';

const Image = ({ webp }) => {
  return (
    <Box
      sx={{
        width: '300px',
        height: '160px',
        backgroundImage: `url(${webp})`,
        backgroundSize: '200px 150px',
        backgroundRepeat: 'no-repeat'
      }}
    />
  );
};

export default Image;
