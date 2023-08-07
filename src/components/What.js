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
      <Content info={{ webp: Picture1, title: '活性汚泥法', content: '好気的な微生物によって下水などの汚れた水を分解、沈殿させ水を浄化する方法' }} />
      <Content info={{ webp: Picture2, title: '余剰汚泥', content: '活性汚泥法によって増殖、沈殿した必要以上の微生物またはその死骸、分解物微生物由来の栄養(リン酸、窒素)が多く含まれている' }} />
      <Content info={{ webp: Picture3, title: '処理水', content: '活性汚泥法において微生物によって浄化された上澄みの水有機物由来の栄養(窒素)が多く含まれている' }} />
      <Content info={{ webp: Picture4, title: '汚泥ケーキ', content: '活性汚泥法により生じた余剰汚泥を分解して、脱水後に残った固形分のことを指す。微生物由来の栄養(リン酸、窒素)が多く含まれている' }} />
    </div>
  );
}

export default What;
