import Content from './News/Content';
import BackColor from './News/BackColor';
import Picture from '../assets/imgs/Top/image.webp';
import { Box } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        slidesToScroll:1,
      },
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        centerMode: false
      },
    },
  ],
  centerMode: true
};

function News() {
  return (
    <Box position="relative">
      <Text />
      <Box sx={{ margin: '30px' }}>
        <Slider {...settings}>
          <Content info={{ webp: Picture, title: "令和4年度最終報告結果" }} />
          <Content info={{ webp: Picture, title: "活性汚泥とは?" }} />
          <Content info={{ webp: Picture, title: "活性汚泥とは?" }} />
          <Content info={{ webp: Picture, title: "活性汚泥とは?" }} />
          <Content info={{ webp: Picture, title: "活性汚泥とは?" }} />
          <Content info={{ webp: Picture, title: "活性汚泥とは?" }} />
          <Content info={{ webp: Picture, title: "活性汚泥とは?" }} />
          <Content info={{ webp: Picture, title: "活性汚泥とは?" }} />
          <Content info={{ webp: Picture, title: "活性汚泥とは?" }} />
        </Slider>
      </Box>
      <MoreText />
      <BackColor />
    </Box>
  );
}

export default News;
