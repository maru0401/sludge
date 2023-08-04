import { CardMedia } from '@mui/material';


const ImageWithText = props => {
  return (
      <CardMedia
        component="img"
        image={props.webp}
        alt="picture"
        sx={{
          height: '300px',
          width: '300px',
          borderRadius: '30px'
        }}
      />
  );
};

export default ImageWithText;
