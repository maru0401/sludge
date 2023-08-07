import Content from './News/Content';
import BackColor from './News/BackColor';
import Picture1 from '../assets/imgs/News/null.JPG';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Text from './News/Text';
import MoreText from './News/MoreText';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      },
    },
  ],
  centerMode: true
};

function News() {
  return (
    <div id='news'>
      <Box position='relative'>
        <Text />
        <Box sx={{ margin: '30px' }}>
          <Slider {...settings}>
            <Content info={{ webp: Picture1, title: '準備中...' }} />
            <Content info={{ webp: Picture1, title: '準備中...' }} />
            <Content info={{ webp: Picture1, title: '準備中...' }} />
            <Content info={{ webp: Picture1, title: '準備中...' }} />
            <Content info={{ webp: Picture1, title: '準備中...' }} />
          </Slider>
        </Box>
        <MoreText />
        <BackColor />
      </Box>
    </div>
  );
}

export default News;
