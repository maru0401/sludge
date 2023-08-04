import { Typography } from '@mui/material';


const Text = () => {
  return (
      <Typography
        variant="h4"
        component="h2"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          border:'1px',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          fontSize: '40px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
          lineHeight: '80px',
        }}
      >
        未来の<br/>しぜんを<br/>創る。
      </Typography>
  );
}

export default Text;
