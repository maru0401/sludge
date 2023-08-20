import { Box } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const Text = ({ text }) => {
  return (
    <Box sx={{
      margin:'20px'
    }}>
      <ReactMarkdown children={text} rehypePlugins={[rehypeRaw]} linkTarget="_blank" />
    </Box>
  );
}

export default Text;
