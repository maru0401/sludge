import { Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const Text = ({ text }) => {
  return (
    <Box sx={{
      margin:'20px'
    }}>
      <ReactMarkdown renderers={{ code: CodeBlock }} children={text}  />
    </Box>
  );
}

export default Text;
