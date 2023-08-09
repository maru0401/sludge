import React from 'react';
import { Container, Grid } from '@mui/material';
import NewsBox from './AllNews/NewsBox';
import Text from './AllNews//Text';
import FadeIn from './FadeIn';


const newsData = [
  {
    id: 1,
    title: 'Sample News 1',
    date: '2023-08-09',
    imageUrl: 'https://via.placeholder.com/150',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 1,
    title: 'Sample News 1',
    date: '2023-08-09',
    imageUrl: 'https://via.placeholder.com/150',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 1,
    title: 'Sample News 1',
    date: '2023-08-09',
    imageUrl: 'https://via.placeholder.com/150',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    id: 1,
    title: 'Sample News 1',
    date: '2023-08-09',
    imageUrl: 'https://via.placeholder.com/150',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
];

const NewsContainer = () => {
  return (
    <>
      <FadeIn>
        <Text />
      </FadeIn>
      <Container>
        <Grid container spacing={2}>
          {newsData.map(news => (
            <Grid item xs={12} md={6} key={news.id}>
              <NewsBox
                title={news.title}
                date={news.date}
                imageUrl={news.imageUrl}
                content={news.content}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default NewsContainer;
