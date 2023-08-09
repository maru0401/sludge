import Image from './Top/Image';
import Text from './Top/Text';
import { Box } from '@mui/material';

function Top({ Slogan, SloganImage }) {
  return (
    <div>
      <Box position='relative'>
        <Image Webp={SloganImage} />
        <Text Content={Slogan} />
      </Box>
    </div>
  );
}

export default Top;
