import React from 'react';
import Instagram from '../../assets/imgs/Footer/Instagram.webp';
import Twitter from '../../assets/imgs/Footer/Twitter.webp';
import School from '../../assets/imgs/Footer/School.webp';
import { Box, CardMedia } from '@mui/material';

const Media = () => {
  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', marginLeft: '65px' }}>
      <a href='https://twitter.com/sludgeactivated' target='_blank' rel='noopener noreferrer'>
        <CardMedia
          component='img'
          src={Twitter}
          draggable={false}
          alt='Twitter'
          sx={{
            height: '40px',
            width: '40px',
            marginRight: '10px',
          }}
        />
      </a>
      <a href='https://www.instagram.com/sarano_hs_official' target='_blank' rel='noopener noreferrer'>
        <CardMedia
          component='img'
          src={Instagram}
          draggable={false}
          alt='Instagram'
          sx={{
            height: '40px',
            width: '40px',
            marginRight: '10px',
          }}
        />
      </a>
      <a href='https://www.nagano-c.ed.jp/sarano' target='_blank' rel='noopener noreferrer'>
        <CardMedia
          component='img'
          src={School}
          draggable={false}
          alt='School'
          sx={{
            height: '40px',
            width: '40px',
            marginRight: '10px',
          }}
        />
      </a>
    </Box>
  );
}

export default Media;
