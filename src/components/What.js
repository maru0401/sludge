import Text from './What/Text';
import Content from './What/Content';
import Picture1 from '../assets/imgs/What/test1.jpg';
import Picture2 from '../assets/imgs/What/test2.jpg';
import Picture3 from '../assets/imgs/What/test3.jpg';
import Picture4 from '../assets/imgs/What/test4.jpg';

function What() {
  return (
    <div id='what'>
      <Text />
      <Content info={{ webp: Picture1, title: '活性汚泥法', content: 'あああああああああああああああああああああああああああああああああああああ' }} />
      <Content info={{ webp: Picture2, title: '余剰汚泥', content: 'あああああああああああああああああああああああああああああああああああああ' }} />
      <Content info={{ webp: Picture3, title: '処理水', content: 'あああああああああああああああああああああああああああああああああああああ' }} />
      <Content info={{ webp: Picture4, title: '汚泥ケーキ', content: 'あああああああああああああああああああああああああああああああああああああ' }} />
    </div>
  );
}

export default What;
