import { Box } from '@mui/material';

const Back = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '600px',
        background: '#10ED261A',
        position: 'absolute',
        top: 0,
        zIndex: -1,
      }}
    />
  );
};

export default Back;
