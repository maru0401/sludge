import { Box, Paper, useMediaQuery } from '@mui/material';
import React, { useState, useEffect, useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import axios from '../assets/js/request';
import { useLocation } from 'react-router-dom';
import Title from '../components/Detail/Title';
import Text from '../components/Detail/Text';
import Loading from '../components/Loading';
import TopDate from '../components/Detail/Date';
import BackButton from '../components/Detail/BackButton';

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`;
}

const CenteredPaper = () => {
  const [loading, setLoading] = useState(true);
  const [Content, setContent] = useState([]);
  const search = useLocation().search;
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const isMobile = useMediaQuery(useTheme().breakpoints.up('sm'));
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`newss/${Number(query.get('id')) || 1}`);
        const formattedNews = {
          title: data.data.attributes.Title,
          date: formatDate(new Date(data.data.attributes.createdAt)),
          text: data.data.attributes.Description,
        };
        setContent(formattedNews);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  if (loading) return <Loading />;

  const centerPaperStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: isMobile ? '70%' : '90%',
    margin: '0 auto',
    padding: '16px',
    overflow: 'hidden',
  };

  return (
    <Paper style={centerPaperStyle} elevation={3}>
      <Title title={Content.title} />
      <TopDate date={Content.date} />
      <Text text={Content.text} />
      <Box sx={{ flexDirection: 'column' }}>
        <BackButton text={'ホームへ'} to={'../'} />
        <BackButton text={'ニュース一覧へ'} to={'../news'} />
      </Box>
    </Paper>
  );
};

export default CenteredPaper;
