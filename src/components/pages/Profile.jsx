import React from 'react';
import styled from 'styled-components';
import {IoIosPeople} from 'react-icons/io';
import { Tabs } from 'antd';

import spacings from '../constants/spacings';
import profileImgBig from '../../images/profileImgBig.png';
import profileImg from '../../images/profile.png';
import gpa from '../../images/gpa.png';
import grades from '../../images/grades.png';
import attendance from '../../images/attendance.png';
import Layout from '../Layout';
import {Box,Text} from '../atoms';
import TabItems from '../organisms/TabItems';

const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    padding: 0 ${spacings.large};

    & .ant-tabs{
      width:100%;
    }
`;

const ProfileInfo = styled.div`
    background-color:#3B4051;
    width:97%;
    height:240px;
    border-radius:27px;
    padding:${spacings.medium};
    display:flex;
    align-items:center;
    justify-content:space-around;
`;

const ProfileImg = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    max-width:118px;
    border-radius:100%;
    border: 5px solid #C0FDB6;
`;



function Profile() {
  const items = [
    {
      key: '1',
      label: 'Личные данные',
      children: <TabItems rows={[
        {
          rowLabel:'ИИН',
          rowInfo:'011032014214'
        },
        {
          rowLabel:'Дата рождения',
          rowInfo:'01-06-2001'
        },
        {
          rowLabel:'Пол',
          rowInfo:'Женский'
        }
      ]}  />,
    },
    {
      key: '2',
      label: 'Сведения о специльности',
      children: <TabItems rows={[
        {
          rowLabel:'Дата поступления',
          rowInfo:'25-08-2019'
        },
        {
          rowLabel:'Группа',
          rowInfo:'ITIS-1916R'
        },
        {
          rowLabel:'Вид финансирования',
          rowInfo:'за счет грантов из республиканских бюджетов'
        },
        {
          rowLabel:'Обучение по квоте',
          rowInfo:''
        },
        {
          rowLabel:'Серия свидетельства о гранте',
          rowInfo:''
        },
        {
          rowLabel:'Номер свидетельства о гранте',
          rowInfo:''
        },
        {
          rowLabel:'Дата присуждения гранта',
          rowInfo:''
        },
      ]}  />,
    },
    {
      key: '3',
      label: 'Контактная информация',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: 'Сведения об образовании',
      children: 'Content of Tab Pane 4',
    },
    {
      key: '5',
      label: 'Внутренние документы',
      children: 'Content of Tab Pane 5',
    },
  ];

  return (
    <Layout pageTitle='Профиль'>
      <Content>
        <ProfileInfo>
          <Box gap='1rem'
            width='15%'
            justifyContent='center'
            padding='0'
          >
            <ProfileImg>
              <img src={profileImgBig} />
            </ProfileImg>
            <Box width='80%'
              padding='0'
              alignItems='flex-start'>
              <Text fontSize='0.8rem'
                fontWeight='500'
                color='#fff'
                width='100%'
                textAlign='left'
              >Name Surname</Text>
              <Text fontWeight='400'
                fontSize='0.7rem'
                color='#fff'
                width='100%'
                textAlign='left'
              >ID:27712</Text>
            </Box>
          </Box>
          <Box width='17%'>
            <Box>
              <IoIosPeople color='#F1AC8E'
                size='3rem'
              />
              <Text color='#fff'
                fontSize='0.7rem'
              >Группа: ITIS-1916</Text>
            </Box>
            <Box>
              <Box
                flexDirection='row'>
                <img src={profileImg}/>
                <img src={profileImg}/>
                <img src={profileImg}/>
              </Box>
              <Text
                width='100%'
                color='#fff'
                fontSize='0.7rem'
              >14 одногруппников</Text>
            </Box>
          </Box>
          <Box width ='9%'
            justifyContent='flex-end'
            height='100px'
            gap='1rem'
          >
            <img src={grades}/>
            <Text color='#fff'
              fontSize='0.9rem'
            >Оценки</Text>
          </Box>
          <Box width ='9%'
            height='100px'
            justifyContent='flex-end'
            gap='1rem'
          >
            <img src={attendance}/>
            <Text color='#fff'
              fontSize='0.9rem'>Посещаемость</Text>
          </Box>
          <Box width ='9%'
            gap='1rem'
            height='100px'
            justifyContent='flex-end'
          >
            <img src={gpa}/>
            <Text color='#fff'
              fontSize='0.9rem'>GPA</Text>
          </Box>
        </ProfileInfo>
        <Tabs 
          defaultActiveKey='1'
          items={items}
        />
      </Content>
    </Layout>
  );
}

export default Profile;