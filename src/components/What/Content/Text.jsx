import { Typography } from '@mui/material';
import { Box } from '@mui/material';

const Text = props => {
  return (
    <Box
      sx={{ top: '0', padding: '25px' }}>
      <Typography fontSize="50px" sx={{ maxWidth: '500px' }}>
        {props.text.title}
      </Typography>
      <Typography fontSize="20px" sx={{ maxWidth: '500px' }}>
        {props.text.content}
      </Typography>
    </Box>
  );
};

export default Text;
