import { Box, Typography } from '@mui/material';

const Text = () => {
  return (
    <Box sx={{
      left: '50%',
      transform: 'translate(-50%, -50%)', position: 'absolute', top: '45%'
    }}>
      <Typography
        variant='h2'
        sx={{
          fontFamily: 'Koulen',
          textAlign: 'center',
          color: '#fff',
          fontSize: '6rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
        }}
      >
        MISSION
      </Typography>
      <Typography
        variant='h3'
        sx={{
          marginTop: '30px',
          textAlign: 'center',
          color: '#fff',
          fontSize: '30px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
          '@media (max-width: 600px)': {
            fontSize: '20px',
          },
        }}
      >
       私達の目標は高校生の目線から活性汚泥法によって発生する”資源”を有効利用し、汚泥廃棄物問題、肥料問題の解決に取り組むことである。それに伴い、汚泥廃棄物の資源化にあたって最大の課題である負の印象を改善することにも解決にもすることである。
      </Typography>
    </Box>
  );
};

export default Text;
