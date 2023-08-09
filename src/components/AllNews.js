import React from 'react';
import { Container, Grid } from '@mui/material';
import NewsBox from './AllNews/NewsBox';
import Text from './AllNews//Text';
import FadeIn from './FadeIn';
import NextButton from './AllNews/NextButton';
import { useState, useEffect, useMemo } from 'react';
import axios from '../assets/js/request';
import PrevButton from './AllNews/PrevButton';
import { useLocation } from 'react-router-dom';

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`;
  ;
}

const NewsContainer = () => {
  const [News, setNews] = useState([]);
  const search = useLocation().search;
  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`newss?sort[0]=createdAt:desc&pagination[limit]=10&populate=*&pagination[start]=${query.get('id') || 0}`);
      setNews(...[data.data.map(con =>
      ({
        imageUrl: `https://admin.activated-sludge.xyz${con.attributes.Image.data.attributes.url}`,
        title: con.attributes.Title,
        date: formatDate(new Date(con.attributes.createdAt)),
        id: con.id,
        content: con.attributes.Description
      }))]);
    })();
  }, [query]);

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
                content={news.content}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid container justifyContent="center" style={{ marginTop: '50px', marginBottom: '20px' }}>
        <PrevButton id={News[0]?.id} />
        <NextButton id={News[News.length - 1]?.id} />
      </Grid>
    </>
  );
};

export default NewsContainer;
