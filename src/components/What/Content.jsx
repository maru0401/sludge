import Text from './Content/Text';
import Image from './Content/Image';
import { Box } from '@mui/material';

const Content = props => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: { xs: 'column', sm: 'row' },
        marginTop: '5rem',
      }}
    >
      <Text text={{ title: props.info.title, content: props.info.content }} />
      <Image webp={props.info.webp} />
    </Box>
  );
};

export default Content;
