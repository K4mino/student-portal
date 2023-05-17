import React from 'react';
import styled from 'styled-components';
import { ref,uploadBytes } from 'firebase/storage';
import { useState } from 'react';
import {Upload} from 'antd';

import uploadVector from '../../images/uploadVector.svg';
import cloud from '../../images/cloud.svg';
import { storage } from '../../firebase';
import { Box, Text } from '../atoms';
import colors from '../constants/colors';
import Layout from '../Layout';
import { useParams } from 'react-router-dom';

const Title = styled(Text)`
    font-size:1.4rem;
    font-weight:600;
    width:100%;
    text-align:left;
`;

const FormBody = styled.div`
    background-color:${colors.boxBackground.firstColor};
    border-radius:24px;
    width:95%;
    padding:40px;
    display:flex;
    flex-direction:column;
    gap:1rem;
`;

const Button = styled.div`
    background:transparent;
    border:2px solid #2E5BF0;
    border-radius:16px;
    padding:13px 26px;
    color:#2E5BF0;
    width:200px;
    text-align:center;
    cursor:pointer;
    margin-top:20px;

    &:hover{
        background-color:#2E5BF0;
        color:#fff;
    }
`;

const Cloud = styled.div`
    position:relative;
    height:77px;
    margin-bottom:20px;
`;

const Vector = styled.img`
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    top:30px;
`;

const Homework = () => {
  const [selectedFile,setSelectedFile] = useState(null);
  const {Dragger} = Upload;
  const {lesson,week} = useParams();

  const uploadHomework = () => {
    if(selectedFile == null) return;
    const homeworkRef = ref(storage,`homeworks/${lesson}/${week}/${selectedFile?.name}`);
    uploadBytes(homeworkRef,selectedFile)
      .then(()=>alert('Success'))
      .catch((err)=> alert(err))
      .finally(()=> setSelectedFile(null));
  };

  return (
    <Layout pageTitle='Задания'>
      <Box 
        gap='1rem'>
        <Title>
            Веб разработка 1 неделя
        </Title>
        <FormBody>
          <Text
            textAlign='left'
            fontSize='1rem'>
            Lorem ipsum dolor sit amet consectetur. Sit quam duis pharetra leo ut quam. At tortor porttitor quis maecenas. Risus praesent morbi faucibus ultricies a tristique etiam imperdiet ac.
          </Text>
          <Text 
            textAlign='left'>
              Дедлайн- 27 Апреля 11:59
          </Text>
          <Text 
            textAlign='left' 
            color='#3FC500'
          >До конца осталось 2 дня</Text>
          <Dragger
            name='file'
            multiple
            onChange={(e) => setSelectedFile(e.file)}>
            <Cloud>
              <img src={cloud}/>
              <Vector src={uploadVector}/>
            </Cloud>
            <Text 
              color='#498098'
              fontSize='1rem'>
                Нажмите чтобы перетащить и загрузить файл
            </Text>
          </Dragger>
          <Button
            onClick={()=>uploadHomework()}>
            Отправить
          </Button>
        </FormBody>
      </Box>
    </Layout>
  );
};

export default Homework;