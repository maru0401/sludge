import Image from './Mission/Image';
import Text from './Mission/Text';
import { Box } from '@mui/material';
function Mission() {
  return (
    <div id='mission'>
    <Box position='relative' sx={{
      marginTop: '10rem', '@media (min-width: 601px)': {
        padding: '100px'
      },
    }}>
      <Image />
      <Text />
    </Box>
    </div>
  );
}

export default Mission;
