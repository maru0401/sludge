import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const RoundedButton = ({ id }) => {
  return (
    <Link to={`/?id=${id}`}>
      <Button
        variant='contained'
        size='large'
        sx={{
          position: 'absolute', // 要素の位置を絶対位置にする
          borderRadius: '50px',
          top: '245px',
          marginLeft: '15px',
          width: '170px',
          height: '40px',
          fontSize: '1.2rem',
          backgroundColor: '#F0F0F0', // ボタンの背景色を設定
          border: '1px solid #000000', // ボーダーの設定
          color: '#000000', // 文字の色を黒に設定
          '&:hover': {
            backgroundColor: 'transparent', // カーソルが合わされたときに背景色を透明にする
          },
        }}
      >
        詳しく見る→
      </Button>
    </Link>
  );
};

export default RoundedButton;
