import Text from './What/Text';
import Content from './What/Content';
import Picture from '../assets/imgs/Top/image.webp';
function What() {
  return (
    <div id='what'>
      <Text />
      <Content info={{ webp: Picture, title: '活性汚泥とは?', content: 'あああああああああああああああああああああああああああああああああああああ' }} />
      <Content info={{ webp: Picture, title: '汚泥処理水とは?', content: 'あああああああああああああああああああああああああああああああああああああ' }} />
      <Content info={{ webp: Picture, title: '脱水ケーキとは?', content: 'あああああああああああああああああああああああああああああああああああああ' }} />
    </div>
  );
}

export default What;
