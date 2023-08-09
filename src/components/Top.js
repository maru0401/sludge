import Image from './Top/Image';
import Text from './Top/Text';
import { Box } from '@mui/material';
import Animation from './Top/Animation';
import axios from '../assets/js/request';
import { useState, useEffect } from 'react';
import loading from '../assets/imgs/Load/loading.webp';
function Top() {
  const [SloganImage, setSloganImage] = useState(loading);
  const [Slogan, setSlogan] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('Slogan?populate=*');
      const Text = data?.data?.attributes?.Slogan?.split(' ').join('\n') || 'error';
      const parts = Text.split(/{(.+?):'(.+?)'}/g);
      const FormatText =  parts.map((part, index) => {
        if (index % 3 === 0) {
          return <span key={index}>{part}</span>;
        } else if (index % 3 === 1) {
          const color = parts[index + 1];
          return <Animation key={index} data={{ text: part, color: color }} />;
        } else {
          return null;
        }
      });
      setSlogan(FormatText);
      setSloganImage(`https://admin.activated-sludge.xyz${data.data.attributes.Image.data.attributes.url}`);
    })();
  }, []);

  return (
    <div>
      <Box position='relative'>
        <Image Webp={SloganImage} />
        <Text Content={Slogan}/>
      </Box>
    </div>
  );
}

export default Top;
