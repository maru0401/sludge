import Text from './What/Text';
import Content from './What/Content';
import FadeIn from './FadeIn';
import { useState, useEffect } from 'react';
import axios from '../assets/js/request';

function What() {
  const [Contents, setContents] = useState();
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('whats?populate=*');
      setContents(data.data.map(con => (
        <FadeIn key={con.id}>
          <Content info={{ webp: `https://admin.activated-sludge.xyz${con.attributes.Image.data.attributes.url}`, title: con.attributes.Title, content: con.attributes.Description }} />
        </FadeIn>
      )));
    })();
  }, []);
  return (
    <div id='what'>
      <FadeIn>
        <Text />
      </FadeIn>
      {Contents}
    </div>
  );
}


export default What;
