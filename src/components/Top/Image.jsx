import Webp from '../../assets/imgs/Top/image.webp';
import { CardMedia } from '@mui/material';

const Image = () => {
  return (
      <CardMedia
        component='img'
        image={Webp}
        alt='pot'
        sx={{ height: '100vh', backgroundSize: 'cover' }}
      />
  );
}

export default Image;
