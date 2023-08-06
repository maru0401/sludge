import Content from './News/Content';
import BackColor from './News/BackColor';
import Picture1 from '../assets/imgs/News/test1.jpg';
import Picture2 from '../assets/imgs/News/test2.jpg';
import Picture3 from '../assets/imgs/News/test3.jpg';
import Picture4 from '../assets/imgs/News/test4.jpg';
import Picture5 from '../assets/imgs/News/test5.jpg';
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
            <Content info={{ webp: Picture1, title: '江ノ島行ってきました' }} />
            <Content info={{ webp: Picture2, title: 'Twitterはじめました' }} />
            <Content info={{ webp: Picture3, title: 'Instagramはじめました' }} />
            <Content info={{ webp: Picture4, title: 'サイトを公開しました' }} />
            <Content info={{ webp: Picture5, title: 'Hello' }} />
          </Slider>
        </Box>
        <MoreText />
        <BackColor />
      </Box>
    </div>
  );
}

export default News;
