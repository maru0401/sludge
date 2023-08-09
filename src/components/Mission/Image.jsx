import { CardMedia } from '@mui/material';

const Image = ({Webp}) => {
  return (
    <CardMedia
      sx={{
        position: 'relative',
        height: '900px',
        backgroundImage: `url(${Webp})`,
        filter: 'blur(3px)',
        '@media (max-width: 600px)': {
          height: '600px',
        },
      }}
      src={Webp}
    />
  );
};

export default Image;
