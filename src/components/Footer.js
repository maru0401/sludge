import { Box } from '@mui/material';
import BackColor from './Footer/BackColor';
import CopyRight from './Footer/CopyRight';
import Media from './Footer/Media';
function Footer() {
  return (
    <Box sx={{ marginTop: 5.4 }}>
      <BackColor />
      <CopyRight />
      <Media />
    </Box>
  );
}

export default Footer;
