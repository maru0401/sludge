import Image from './Mission/Image';
import Text from './Mission/Text';
import Content from './Mission/Content';
import { Box } from '@mui/material';
import FadeIn from './FadeIn';
function Mission({ MissionContent, MissionImage }) {
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
