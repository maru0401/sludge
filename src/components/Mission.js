import Image from './Mission/Image';
import Text from './Mission/Text';
import Content from './Mission/Content';
import { Box } from '@mui/material';
import FadeIn from './FadeIn';
import { useState, useEffect } from 'react';
import axios from '../assets/js/request';
import loading from '../assets/imgs/Load/loading.webp';

function Mission() {
  const [MissionImage, setMissionImage] = useState(loading);
  const [MissionContent, setMissionContent] = useState();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('Mission?populate=*');
      setMissionImage(`https://admin.activated-sludge.xyz${data.data.attributes.Image.data.attributes.url}`);
      setMissionContent(data.data.attributes.Content)
    })();
  }, []);
  return (
    <div id='mission'>
      <Box position='relative' sx={{
        marginTop: '10rem', '@media (min-width: 601px)': {
          padding: '100px'
        },
      }}>
        <Image Webp={MissionImage} />
        <Box sx={{
          left: '50%',
          transform: 'translate(-50%, -50%)', position: 'absolute', top: '45%'
        }}>
          <FadeIn>
            <Text />
          </FadeIn>
          <FadeIn>
            <Content content={MissionContent} />
          </FadeIn>
        </Box>
      </Box>
    </div>
  );
}

export default Mission;
