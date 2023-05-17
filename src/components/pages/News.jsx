import React from 'react';
import styled from 'styled-components';
import { collection,onSnapshot } from 'firebase/firestore';
import { ref,getDownloadURL } from 'firebase/storage';

import { db,storage } from '../../firebase';
import  Layout  from '../Layout';
import { Text } from '../atoms';
import { useEffect } from 'react';
import { useState } from 'react';

const Wrapper =styled.div`
    width:100%;
    display:grid;
    gap:1rem;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows:repeat(2,1fr);

    @media(max-width:660px){
      grid-template-columns:1fr;
    }
`;

const NewsCard = styled.div`
    border-radius:20px;
    background-color:#fff;
    min-height:400px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    cursor:pointer;
    background-position:center;
    background-size:100%;
    background-repeat:no-repeat;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);

  ${({img}) => img ? `background-image:url(${img})` : ''};

    &:first-child{
      grid-column-end:span 2;
    }

    @media(max-width:660px){
      &:first-child{
        grid-column-end:span 1;
      }
    }
`;

const CardInfo = styled.div`
  background-color:rgba(108, 97, 97, 0.7);
  width:100%;
  border-radius:0 0 20px 20px;
  color:#fff;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:10px 0px;
`;

const CardText = styled(Text)`
  text-align:center;
  width:90%;
  font-size:0.8rem;
  padding-top:10px;
`;

/* const news = [
  {
    id:1,
    title:'Стажировка',
    img:'https://iahq.imgix.net/images/online-internships/career-fields/computer-science-and-information-technology.jpg?auto=format,compress',
    shortText:'Студентов 3/4 курсов приглашают на стажировку в халык банк'
  },
  {
    id:2,
    img:'https://i.ytimg.com/vi/BFvOxyUsjhY/maxresdefault.jpg',
    title:'Приглашаем вас на мероприятие IITUxCoursera Day',
  },
  {
    id:3,
    img:'https://img.freepik.com/premium-vector/student-academic-cap-tribune-makes-speech-woman-diploma-defense-bachelors-masters-degree-higher-education-vector-illustration-blue-colors-white-background_661108-3676.jpg?w=2000',
    title:'Начало второй предзащиты дипломной работы',
  },
  {
    id:4,
    img:'https://uploads-ssl.webflow.com/5ed0f381d2b21c219f260b60/5ee31dc8601c7f4fb62cb4c1_n17r-logo-red.png',
    title:'7-9 апреля nFactorial School проводит хакатон ',
  },
  {
    id:5,
    img:'https://iitu.edu.kz/media/images/Akademicheskaia_mobilnost_guide_0000001.original.jpg',
    title:'Открыт набор на академическую мобильность',
  }
]; */

const News = () => {
  const [newsList,setNewsList] = useState([]);
  useEffect(()=> {
    const unsub = onSnapshot(collection(db,'news'),async(snapShot) => {
      let list = [];
      for(const snap of snapShot.docs){
        const newsItem = snap.data();
        const { title, description, imageLink, id } = newsItem;

        const imageRef = ref(storage, imageLink);
        const imageURL = await getDownloadURL(imageRef);
        list.push({ id, title, description, imageURL });
      }
      setNewsList(list);
    });

    return () => {
      unsub();
    };
  },[]);

  return (
    <Layout pageTitle='Новости'>
      <Wrapper>
        {
          newsList.map((news) => (
            <NewsCard
              img={news.imageURL}
              key={news.id}>
              <CardInfo>
                <Text
                  fontSize='1rem'
                  fontWeight='500'>
                  {news.title}
                </Text>
                <CardText>
                  {news?.description}
                </CardText>
              </CardInfo>
            </NewsCard>
          ))
        }
      </Wrapper>
    </Layout>
  );
};

export default News;