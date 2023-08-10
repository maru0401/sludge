import { Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const Text = ({ text }) => {
  return (
    <Box sx={{
      margin:'20px'
    }}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </Box>
  );
}

export default Text;
