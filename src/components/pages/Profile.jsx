import React,{useEffect,useContext} from 'react';
import styled from 'styled-components';
import {IoIosPeople} from 'react-icons/io';
import { Tabs } from 'antd';
import { getDoc,doc } from 'firebase/firestore';

import spacings from '../constants/spacings';
import profileImgBig from '../../images/profileImgBig.png';
import profileImg from '../../images/profile.png';
import gpa from '../../images/gpa.png';
import grades from '../../images/grades.png';
import attendance from '../../images/attendance.png';
import Layout from '../Layout';
import {Box,Text} from '../atoms';
import {TabItems} from '../organisms';
import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';
import ProfileTeacher from './ProfileTeacher'; 
import { useState } from 'react';

const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    padding: 0 ${spacings.large};

    & .ant-tabs{
      width:100%;
    }

    @media(max-width:660px){
      & .ant-tabs{
        width:100%;
      }
      & .ant-tabs .ant-tabs-nav{
        width:100%;
      }

      &{
        padding:0;
      }
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

    @media(max-width:660px){
      height:min-content;
      display:grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      place-items:center;
      width:90%;

      & .groupmates{
        display:none;
      }

      & .student-group{
        width:100%;

        .people-icon svg{
          width:2rem;
        }
      }
    }
`;

const ProfileImg = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    max-width:118px;
    border-radius:100%;
    border: 5px solid #C0FDB6;
`;

const ProfileImgWrapper = styled(Box)`
    gap:1rem;
    width:15%;
    justify-content:center;
    padding:0;

     @media(max-width:660px){
      width:100%;
      grid-area: 1 / 2 / 3 / 3;
      grid-row-end:span 2;
      & .profile__name-id{
        align-items:center;
      }
     }
`;

const ProfileText = styled(Text)`
  font-size:0.8rem;
  font-weight:500;
  color:#fff;
  width:100%;
  text-align:left;

  @media(max-width:660px){
    text-align:center;
  }
`;

const ProfileChart = styled(Box)`
  width:9%;
  justify-content:flex-end;
  height:100px;
  gap:1rem;

  @media(max-width:660px){
    width:55%;
    padding:0;
  }
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
  const {currentUser} = useContext(AuthContext);
  const [role,setRole] = useState('');
  useEffect(() => {
    const getData = async() => {
      try {
        const res = await getDoc(doc(db,'users',currentUser.uid));
        const userData = await res.data();
        setRole(userData?.role);
      } catch (error) {
        console.log(error);
      }
    };
    currentUser.uid && getData();
  },[currentUser.uid]);

  return (
    <Layout pageTitle='Профиль'>
      {role == 'student' 
        && (
          <Content>
            <ProfileInfo>
              <ProfileImgWrapper>
                <ProfileImg>
                  <img src={profileImgBig} />
                </ProfileImg>
                <Box
                  className='profile__name-id'
                  width='80%'
                  padding='0'
                  alignItems='flex-start'>
                  <ProfileText>Name Surname</ProfileText>
                  <ProfileText fontWeight='400'
                  >ID:27712
                  </ProfileText>
                </Box>
              </ProfileImgWrapper>
              <Box width='17%' 
                className='student-group'>
                <Box>
                  <IoIosPeople
                    className='people-icon'
                    color='#F1AC8E'
                    size='50%'
                  />
                  <Text color='#fff'
                    fontSize='0.7rem'
                  >Группа: ITIS-1916</Text>
                </Box>
                <Box className='groupmates'>
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
              <ProfileChart>
                <img src={grades}/>
                <Text color='#fff'
                  fontSize='0.9rem'
                >Оценки</Text>
              </ProfileChart>
              <ProfileChart>
                <img src={attendance}/>
                <Text color='#fff'
                  fontSize='0.9rem'>Посещаемость</Text>
              </ProfileChart>
              <ProfileChart>
                <img src={gpa}/>
                <Text color='#fff'
                  fontSize='0.9rem'>GPA</Text>
              </ProfileChart>
            </ProfileInfo>
            <Tabs 
              defaultActiveKey='1'
              items={items}
            />
          </Content>)}
      {role == 'teacher' && <ProfileTeacher/>}
    </Layout>
  );
}

export default Profile;