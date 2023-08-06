import Webp from '../../assets/imgs/Mission/test5.jpg';
import { CardMedia } from '@mui/material';

const isSafariBasedBrowser = () => {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
};

const Image = () => {
  const shouldApplyBackgroundAttachment = isSafariBasedBrowser();

  return (
    <CardMedia
      sx={{
        position: 'relative',
        height: '900px',
        backgroundImage: `url(${Webp})`,
        ...(!shouldApplyBackgroundAttachment && {
          backgroundAttachment: 'fixed',
        }),
        filter: 'blur(8px)',
      }}
      src={Webp}
    />
  );
};

export default Image;
