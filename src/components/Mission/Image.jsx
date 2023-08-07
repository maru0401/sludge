import Webp from '../../assets/imgs/Mission/mission.JPG';
import { CardMedia } from '@mui/material';

const Image = () => {
  return (
    <CardMedia
      sx={{
        position: 'relative',
        height: '900px', // デフォルトの高さ
        backgroundImage: `url(${Webp})`,
        filter: 'blur(3px)',
        
        '@media (max-width: 600px)': {
          height: '600px', // 画面幅が 600px 以下の場合の高さ
        },
      }}
      src={Webp}
    />
  );
};

export default Image;
