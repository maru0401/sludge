import Text from './What/Text';
import FadeIn from './FadeIn';

function What({Contents}) {
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
