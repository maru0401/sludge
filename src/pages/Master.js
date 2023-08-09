import Header from '../components/Header';
import Top from '../components/Top';
import What from '../components/What';
import Mission from '../components/Mission';
import News from '../components/News';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import axios from '../assets/js/request';
import Animation from '../components/Top/Animation';
import WhatContent from '../components/What/Content';
import NewsContent from '../components/News/Content';
import FadeIn from '../components/FadeIn';
import Loading from '../components/Loading';

const BaseUrl = 'https://admin.activated-sludge.xyz';
function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`;
  ;
}
function Master() {
  const [loading, setLoading] = useState(true);
  const [SloganImage, setSloganImage] = useState(loading);
  const [Slogan, setSlogan] = useState();
  const [WhatContents, setWhatContents] = useState();
  const [MissionImage, setMissionImage] = useState(loading);
  const [MissionContent, setMissionContent] = useState();
  const [NewsContents, setNewsContents] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const [sloganResponse, whatResponse, missionResponse, newsResponse] = await Promise.all([
          axios.get('Slogan?populate=*'),
          axios.get('whats?populate=*'),
          axios.get('Mission?populate=*'),
          axios.get('newss?sort[0]=createdAt:desc&pagination[limit]=10&populate=*')
        ]);

        const sloganData = sloganResponse.data;
        const Text = sloganData?.data?.attributes?.Slogan?.split(' ').join('\n') || 'error';
        const parts = Text.split(/{(.+?):'(.+?)'}/g);
        const FormatText = parts.map((part, index) => {
          if (index % 3 === 0) {
            return <span key={index}>{part}</span>;
          } else if (index % 3 === 1) {
            const color = parts[index + 1];
            return <Animation key={index} data={{ text: part, color: color }} />;
          } else {
            return null;
          }
        });

        const whatData = whatResponse.data;
        const whatContent = whatData.data.map(con => (
          <FadeIn key={con.id}>
            <WhatContent info={{ webp: `${BaseUrl}${con.attributes.Image.data.attributes.url}`, title: con.attributes.Title, content: con.attributes.Description }} />
          </FadeIn>
        ));

        const missionData = missionResponse.data;
        const missionContent = missionData.data.attributes.Content;

        const newsData = newsResponse.data;
        const newsContent = newsData.data.map(con => (
          <NewsContent key={con.id} info={{ webp: `${BaseUrl}${con.attributes.Image.data.attributes.url}`, title: con.attributes.Title, date: formatDate(new Date(con.attributes.createdAt)), id: con.id }} />
        ));
        setSloganImage(`${BaseUrl}${sloganData.data.attributes.Image.data.attributes.url}`);
        setMissionImage(`${BaseUrl}${missionData.data.attributes.Image.data.attributes.url}`);
        setSlogan(FormatText);
        setWhatContents(whatContent);
        setMissionContent(missionContent);
        setNewsContents(newsContent);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      };
    };
    fetchData();
  }, []);

  if (loading) return (<Loading />);

  return (
    <div>
      <Header />
      <Top Slogan={Slogan} SloganImage={SloganImage} />
      <What Contents={WhatContents} />
      <Mission MissionContent={MissionContent} MissionImage={MissionImage} />
      <News Contents={NewsContents} />
      <Footer />
    </div>
  );
}

export default Master;