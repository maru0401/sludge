import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NewsBox = ({ title, date, imageUrl, content, id }) => {
  return (
    <Card sx={{ display: 'flex', marginBottom: '20px' }}>
      <CardMedia
        component="img"
        draggable={false}
        sx={{ width: 150, maxHeight: 2000, objectFit: 'cover' }}
        image={imageUrl}
        alt={title}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {date}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2">{content}</Typography>
        </CardContent>
        <Button
          variant='contained'
          component={Link}
          to={`/detail?id=${id}`}
          sx={{
            borderRadius: '50px',
            width: '140px',
            height: '30px',
            fontSize: '12px',
            backgroundColor: '#F0F0F0',
            border: '1px solid #000000',
            color: '#000000',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '& a': {
              color: '#000000',
              textDecoration: 'none',
            },
            marginBottom: '10px',
            marginLeft: '20px'
          }}
        >
          詳しく見る→
        </Button>
      </Box>
    </Card>
  );
};

export default NewsBox;
