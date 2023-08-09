import { Box } from '@mui/material';
import Image from './Content/Image';
import RoundedButton from './Content/RoundedButton';
import Title from './Content/Title';
import Date from './Content/Date';

const Content = props => {
  return (
    <Box
      component='div'
      sx={{
        width: '200px',
        height: '300px',
        backgroundColor: 'white',
        marginTop: '10px',
        position: 'relative',
        boxShadow: '0px 0px 1px 1px #00000040 inset',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <Image webp={props.info.webp} />
      <Date date={props.info.date}/>
      <Title title={props.info.title} />
      <RoundedButton id={props.info.id}/>
    </Box>
  );
}

export default Content;
