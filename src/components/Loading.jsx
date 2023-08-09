import { Box, CardMedia } from '@mui/material';
import Cat from '../assets/imgs/Load/cat.gif';
const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <CardMedia
        component="img"
        alt="FullScreen Image"
        image={Cat}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
}

export default Loading;
