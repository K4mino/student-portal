import React from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

import { storage } from '../../firebase';
import Layout from '../Layout';
import { Box,Text } from '../atoms';
import colors from '../constants/colors';
import { useEffect } from 'react';
import { useState } from 'react';

const Week = styled.div`
    width:100%;
    background-color:${colors.boxBackground.firstColor};
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:24px;
    border-radius:24px;
`;

const Title = styled(Text)`
    font-size:1.4rem;
    font-weight:600;
    width:100%;
    text-align:left;
`;

const BigText = styled(Text)`
    font-size:1.1rem;
    font-weight:500;
    width:100%;
    text-align:left;
`;

const SmallText = styled(Text)`
    font-size:0.9rem;
    font-weight:400;
    width:100%;
    text-align:left;
`;

const StyledLink = styled(Link)`
  font-size:0.9rem;
  font-weight:400;
  text-decoration:none;
  color:#3950C9;
`;
const Tasks = () => {
  const location = useLocation();
  const [materials,setMaterials] = useState([]);
  const [downloadUrl,setDownloadUrl] = useState('');
  const listRef  = ref(storage,'studyMaterials/');
  useEffect(()=> {
    listAll(listRef)
      .then((res) => setMaterials(res.items))
      .catch((err) => console.log(err));
  },[]);


  const getFile = (name) =>  {
    getDownloadURL(ref(storage,`studyMaterials/${name}`))
      .then((url) => setDownloadUrl(url))
      .catch(err => console.log(err));
  };

  useEffect(()=> {
    if(downloadUrl !== downloadUrl){
      console.log('pizdec');
      setDownloadUrl(downloadUrl);
    }
  },[downloadUrl]);

  return (
    <Layout pageTitle='Задания'>
      <Box
        gap='1rem'
        width='95%'>
        <Title>
            Веб разработка
        </Title>
        <Week>
          <BigText>1 неделя</BigText>
          <BigText>Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam.</BigText>
          <SmallText>
            Материалы:
          </SmallText>
          {materials.map((item) => 
            <a href={downloadUrl}
              rel='noreferrer'
              target='_blank'
              key={item.name}
              onClick={getFile(item.name)}>
              {item.name}
            </a>)}
          <SmallText>
            Тест
          </SmallText>
          <StyledLink to={location.pathname + '/quiz'}>
            Тест 1
          </StyledLink>
          <SmallText>
            Домашнее задание
          </SmallText>
          <StyledLink to={location.pathname +'/homework'}>
            Загрузить ДЗ
          </StyledLink>
        </Week>
        <Week>
          <BigText>
            2 неделя
          </BigText>
          <BigText>
            Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam.
          </BigText>
          <SmallText>
            Материалы:
          </SmallText>
          <StyledLink>
            Лекция1.pdf
          </StyledLink>
          <SmallText>
            Тест
          </SmallText>
          <StyledLink>
            Тест 1
          </StyledLink>
          <SmallText>
            Домашнее задание
          </SmallText>
          <StyledLink>
            Загрузить ДЗ
          </StyledLink>
        </Week>
      </Box>
    </Layout>
  );
};

export default Tasks;