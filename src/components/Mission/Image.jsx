import Webp from '../../assets/imgs/Top/image.webp';
import { CardMedia } from '@mui/material';

const Image = () => {
  return (
    <CardMedia
      sx={{
        position: 'relative',
        height: '900px',
        backgroundImage: `url(${Webp})`,
        backgroundAttachment: 'fixed',
        filter: 'blur(8px)',
      }}
      src={Webp}
    />
  );
};

export default Image;
