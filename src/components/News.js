import Content from './News/Content';
import BackColor from './News/BackColor';
import { Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Text from './News/Text';
import MoreText from './News/MoreText';
import FadeIn from './FadeIn';
import { useState, useEffect } from 'react';
import axios from '../assets/js/request';

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
function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`;
  ;
}

function News() {
  const [Contents, setContents] = useState();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('newss?sort[0]=createdAt:desc&pagination[limit]=10&populate=*');
      setContents(data.data.map(con => (<Content key={con.id} info={{ webp: `https://admin.activated-sludge.xyz${con.attributes.Image.data.attributes.url}`, title: con.attributes.Title, date: formatDate(new Date(con.attributes.createdAt)), id: con.id }} />)));
    })();
  }, []);
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
