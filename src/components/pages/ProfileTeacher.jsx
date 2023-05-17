import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'antd';

import {Box,Text} from '../atoms';
import spacings from '../constants/spacings';
import {TabItems} from '../organisms';
import profileImgBig from '../../images/profileImgBig.png';

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


const ProfileTeacher = () => {

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
          rowInfo:'22-04-1992'
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
          rowLabel:'Дата начала работы',
          rowInfo:'25-08-2019'
        },
        {
          rowLabel:'Департамент',
          rowInfo:'ИС'
        },
        {
          rowLabel:'Степень',
          rowInfo:'Phd'
        },
        {
          rowLabel:'Предметы',
          rowInfo:'Web,PM'
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
      label: 'Внутренние документы',
      children: 'Content of Tab Pane 5',
    },
  ];

  return (
    <Content>
      <ProfileInfo>
        <ProfileImgWrapper>
          <ProfileImg>
            <img src={profileImgBig}/>
          </ProfileImg>
          <Box
            className='profile__name-id'
            width='80%'
            padding='0'
            alignItems='flex-start'>
            <ProfileText>Name Surname</ProfileText>
          </Box>
        </ProfileImgWrapper>
        
      </ProfileInfo>
      <Tabs 
        defaultActiveKey='1'
        items={items}/>
    </Content>
  );
};

export default ProfileTeacher;