import React from 'react';
import Layout from '../Layout';
import styled from 'styled-components';
import { useState } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

import { storage } from '../../firebase';
import colors from '../constants/colors';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Week = styled.div`
    width:100%;
    background-color:${colors.boxBackground.firstColor};
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:24px;
    border-radius:24px;
`;


const HomeworkTeacher = () => {
  const [homeworks,setHomeworks] = useState([]);
  const {lesson,week} = useParams();
  const [downloadUrl,setDownloadUrl] = useState('');
  const listRef = ref(storage,`homeworks/${lesson}/${week}`);

  useEffect(()=> {
    listAll(listRef)
      .then((res) => setHomeworks(res.items))
      .catch((err) => console.log(err));
  },[]);

  const getFile = (name) =>  {
    getDownloadURL(ref(storage,`homeworks/${lesson}/${week}/${name}`))
      .then((url) => setDownloadUrl(url))
      .catch(err => console.log(err));
  };
    
  useEffect(()=> {
    setDownloadUrl(downloadUrl);
  },[downloadUrl]);

  return (
    <Layout pageTitle='Задания'>
      {
        homeworks.map((hw) => (
          <Week key={hw}>
            <a href={downloadUrl}
              target='_blank'
              onClick={() => getFile(hw.name)}
              rel='noreferrer'>
              {hw.name}
            </a>
          </Week>
        ))
      }
    </Layout>
  );
};

export default HomeworkTeacher;