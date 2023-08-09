import BackColor from './News/BackColor';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Text from './News/Text';
import MoreText from './News/MoreText';
import FadeIn from './FadeIn';

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


function News({Contents}) {

  return (
    <div id='news'>
      <Box position='relative'>
        <FadeIn>
          <Text />
        </FadeIn>
        <Box sx={{ margin: '30px' }}>
          <Slider {...settings}>
            {Contents}
          </Slider>
        </Box>
        <MoreText />
        <BackColor />
      </Box>
    </div>
  );
}

export default News;
