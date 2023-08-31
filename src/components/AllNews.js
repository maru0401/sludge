import React from 'react';
import { Container, Grid } from '@mui/material';
import NewsBox from './AllNews/NewsBox';
import Text from './AllNews//Text';
import FadeIn from './FadeIn';
import NextButton from './AllNews/NextButton';
import PrevButton from './AllNews/PrevButton';

const NewsContainer = ({ News,Now }) => {
  console.log(News)
  return (
    <>
      <FadeIn>
        <Text />
      </FadeIn>
      <Container>
        <Grid container spacing={2}>
          {News.map(news => (
            <Grid item xs={12} md={6} key={news.id}>
              <NewsBox
                title={news.title}
                date={news.date}
                imageUrl={news.imageUrl}
                content={news.content.slice(0, 40)}
                id={news.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid container justifyContent="center" style={{ marginTop: '50px', marginBottom: '20px' }}>
        <PrevButton now={Now} id={News?.length} />
        <NextButton id={News?.length} />
      </Grid>
    </>
  );
};

export default NewsContainer;
