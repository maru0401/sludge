import React, { useState, useEffect, useMemo } from 'react';
import axios from '../assets/js/request';
import { useLocation } from 'react-router-dom';
import AllNews from '../components/AllNews';
import Loading from '../components/Loading';
import BackButton from '../components/AllNews/BackButton';

const BaseUrl = 'https://admin.activated-sludge.xyz';

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`;
}

function News() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const search = useLocation().search;
  const query = useMemo(() => new URLSearchParams(search), [search]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`newss?sort[0]=createdAt:desc&pagination[limit]=10&populate=*&pagination[start]=${Number(query.get('id')) || 1}`);
        const formattedNews = data.data.map(con => ({
          imageUrl: `${BaseUrl}${con.attributes.Image.data.attributes.url}`,
          title: con.attributes.Title,
          date: formatDate(new Date(con.attributes.createdAt)),
          id: con.id,
          content: con.attributes.Description
        }));

        setNews(formattedNews);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  if (loading) return (<Loading />);

  return (
    <div>
      <AllNews News={news} />
      <BackButton/>
    </div>
  );
}

export default News;
