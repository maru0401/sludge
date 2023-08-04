import Instagram from '../../assets/imgs/Media/Instagram.webp';
import Twitter from '../../assets/imgs/Media/Twitter.webp';
import School from '../../assets/imgs/Media/School.webp'
import { Box, CardMedia } from '@mui/material';

const Media = () => {
  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', marginLeft: '65px' }}>
      <CardMedia
        component='img'
        src={Twitter}
        alt='Twitter'
        sx={{
          height: '40px',
          width: '40px',
          marginRight: '10px',
        }}
      />
      <CardMedia
        component='img'
        src={Instagram}
        alt='Instagram'
        sx={{
          height: '40px',
          width: '40px',
          marginRight: '10px',
        }}
      />
      <CardMedia
        component='img'
        src={School}
        alt='School'
        sx={{
          height: '40px',
          width: '40px',
          marginRight: '10px',
        }}
      />
    </Box>
  );
}

export default Media;
