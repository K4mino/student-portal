import React from 'react';
import styled from 'styled-components';

import {Box,Text} from '../atoms';
import subject from '../../images/subject.svg';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../Layout';

const Wrapper = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:1rem;
`;

const Card = styled.div`
    border-radius:23px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:1rem;
`;

const CardInfo = styled.div`
    background-color:#F0F3FF;
    padding:15px;
    display:flex;
    flex-direction:column;
    border-radius:13px;
    gap:10px;
    justify-content:flex-start;
`;

const CardTitle = styled(Box)`
    padding:0;
    width:100%;
    flex-direction:row;
    gap:1rem;
    justify-content:flex-start;
`;

const CardText = styled(Text)`
    text-align:left;
    width:100%;
    font-size:0.8rem;
`;

const StyledLink = styled(Link)`
    color:#2F4DB7;
    text-decoration:none;
    font-size:0.8rem;
`;

const Disciplines = () => {
  let location = useLocation();

  return (
    <Layout pageTitle='Дисциплины'>
      <Wrapper>
        <Card>
          <CardTitle>
            <img src={subject}/>
            <Box 
              padding='0'
              gap='0.5rem'>
              <CardText
                fontWeight='600'>
                Веб разработка
              </CardText>
              <CardText>
                John.D
              </CardText>
            </Box>
          </CardTitle>
          <CardInfo>
            <CardText 
              fontSize='0.6rem'
              fontWeight='600'>
                Текущая неделя 3
            </CardText>
            <CardText
              fontSize='0.6rem'>
          Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. 
            </CardText>
            <StyledLink to={location.pathname + '/tasks'}>
                Перейти к заданиям
            </StyledLink>
          </CardInfo>
        </Card>
        <Card>
          <CardTitle>
            <img src={subject}/>
            <Box 
              padding='0'
              gap='0.5rem'>
              <CardText
                fontWeight='600'>
                Веб разработка
              </CardText>
              <CardText>
                John.D
              </CardText>
            </Box>
          </CardTitle>
          <CardInfo>
            <CardText 
              fontSize='0.6rem'
              fontWeight='600'>
                Текущая неделя 3
            </CardText>
            <CardText
              fontSize='0.6rem'>
          Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. 
            </CardText>
            <StyledLink to={location.pathname + '/tasks'}>
          Перейти к заданиям
            </StyledLink>
          </CardInfo>
        </Card>
        <Card>
          <CardTitle>
            <img src={subject}/>
            <Box 
              padding='0'
              gap='0.5rem'>
              <CardText
                fontWeight='600'>
                Веб разработка
              </CardText>
              <CardText>
                John.D
              </CardText>
            </Box>
          </CardTitle>
          <CardInfo>
            <CardText 
              fontSize='0.6rem'
              fontWeight='600'>
                Текущая неделя 3
            </CardText>
            <CardText
              fontSize='0.6rem'>
          Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. 
            </CardText>
            <StyledLink to={location.pathname + '/tasks'}>
          Перейти к заданиям
            </StyledLink>
          </CardInfo>
        </Card>
      </Wrapper>
    </Layout>
  );
};

export default Disciplines;