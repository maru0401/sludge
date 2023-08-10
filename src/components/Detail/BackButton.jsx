import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const BackButton = ({ text,to }) => {
  return (
    <Link to={to}>
      <Button
        variant='contained'
        sx={{
          borderRadius: '50px',
          marginLeft: '15px',
          width: '150px',
          height: '30px',
          fontSize: '15px',
          backgroundColor: '#F0F0F0', // ボタンの背景色を設定
          border: '1px solid #000000', // ボーダーの設定
          color: '#000000', // 文字の色を黒に設定
          '&:hover': {
            backgroundColor: 'transparent', // カーソルが合わされたときに背景色を透明にする
          },
        }}
      >
        {text}
      </Button>
    </Link>
  );
};

export default BackButton;
