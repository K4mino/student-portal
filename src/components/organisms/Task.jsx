import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

import { storage } from '../../firebase';
import colors from '../constants/colors';
import { Text } from '../atoms';
import TeacherTask from './TeacherTask';

const Week = styled.div`
    width:100%;
    background-color:${colors.boxBackground.firstColor};
    display:flex;
    flex-direction:column;
    gap:10px;
    padding:24px;
    border-radius:24px;
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

const Task = ({lesson,week,role,description}) => {
  const location = useLocation();
  const [materials,setMaterials] = useState([]);
  const [downloadUrl,setDownloadUrl] = useState('');
  const listRef  = ref(storage,`studyMaterials/${lesson}/${week}`);

  useEffect(()=> {
    listAll(listRef)
      .then((res) => setMaterials(res.items))
      .catch((err) => console.log(err));
  },[]);

  const getFile = (name) =>  {
    getDownloadURL(ref(storage,`studyMaterials/${lesson}/${week}/${name}`))
      .then((url) => setDownloadUrl(url))
      .catch(err => console.log(err));
  };
    
  useEffect(()=> {
    setDownloadUrl(downloadUrl);
  },[downloadUrl]);

  return (
    <>
      {role == 'student' &&  <Week>
        <BigText>{week} неделя</BigText>
        <BigText>{description}</BigText>
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
        <StyledLink to={location.pathname +'/'+lesson+'/'+week+'/homework'}>
            Загрузить ДЗ
        </StyledLink>
      </Week>}
      {
        role == 'teacher' && <TeacherTask lesson={lesson}
          week={week}
          description={description}/>
      }
    </>
  );
};

export default Task;