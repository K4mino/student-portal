import React from 'react';
import styled from 'styled-components';

import  Layout  from '../Layout';
import { Text } from '../atoms';

const Wrapper =styled.div`
    display:grid;
    gap:1rem;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows:repeat(2,1fr);
`;

const NewsCard = styled.div`
    border-radius:20px;
    background-color:grey;
    min-height:400px;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    cursor:pointer;

    &:first-child{
      grid-column-end:span 2;
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
  text-align:left;
  width:90%;
  font-size:0.8rem;
  padding-top:10px;
`;

const news = [
  {
    id:1,
    title:'Lorem ipsum asdqq',
    shortText:'Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac. '
  },
  {
    id:2,
    title:'Lorem ipsum asdqq',
  },
  {
    id:3,
    title:'Lorem ipsum asdqq',
  },
  {
    id:4,
    title:'Lorem ipsum asdqq',
  },
  {
    id:5,
    title:'Lorem ipsum asdqq',
  }
];

const News = () => {
  return (
    <Layout pageTitle='Новости'>
      <Wrapper>
        {
          news.map((news) => (
            <NewsCard 
              key={news.id}>
              <CardInfo>
                <Text
                  fontSize='1rem'
                  fontWeight='500'>
                  {news.title}
                </Text>
                <CardText>
                  {news?.shortText}
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