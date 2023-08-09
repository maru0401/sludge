import { CardMedia } from '@mui/material';

const Image = ({ Webp }) => {
  return (
    <CardMedia
      component='img'
      image={Webp}
      alt='pot'
      draggable={false}
      sx={{ height: '100vh', backgroundSize: 'cover' }}
    />
  );
}

export default Image;
