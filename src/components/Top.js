import Image from './Top/Image';
import Text from './Top/Text';
import { Box } from '@mui/material';

function Top() {
  return (
    <div>
      <Box position="relative">
        <Image />
        <Text />
      </Box>
    </div>
  );
}

export default Top;
