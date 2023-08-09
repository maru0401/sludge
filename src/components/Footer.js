import { Box } from '@mui/material';
import BackColor from './Footer/BackColor';
import CopyRight from './Footer/CopyRight';
import Media from './Footer/Media';
import { useState, useEffect } from 'react';
import axios from '../assets/js/request';
function Footer() {
  const [FooterText, setFooterText] = useState();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('copyright');
      setFooterText(`${data.data.attributes.Copyright}`);
    })();
  }, []);
  return (
  <Box sx={{ marginTop: 8 }}>
    <BackColor />
    <CopyRight Text={FooterText} />
    <Media />
  </Box>
  );
}

export default Footer;
