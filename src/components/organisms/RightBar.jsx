import React from 'react';
import {  Calendar} from 'antd';
import { useDispatch , useSelector } from 'react-redux';


import styled from 'styled-components';
import { toggle } from '../reducers/rightbarReducer';
import { Box,Text } from '../atoms';
import {Notification} from './Notification';
import vector from '../../images/rightBarBtn.png';
import { selectRightbarIsOpen } from '../selectors/rightbarSelector';


const Switcher = styled.div`
    border-radius:100%;
    width:40px;
    height:40px;
    background-color:#E9EBF2;
    position:absolute;
    top:-10px;
    left:-10px;
    z-index:6;
    cursor:pointer;
    background-image:url(${vector});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;

    ${({isOpen}) => isOpen ? 'transform:rotate(0deg)' : 'transform:rotate(180deg);'}
`;

const Bar = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
    background-color:#E9EBF2;
    width:22%;
    min-width:300px;
    border-radius:37px;
    position:fixed;
    height:calc(100% - 107px);
    right:0;
    z-index:5;
    padding:30px 20px;


    transition: all .5s ease-in-out;
    ${({isOpen}) => isOpen ? 'transform:translateX(0%)' : 'transform:translateX(90%);'};
  
`;

const NotificationWrapper = styled(Box)`
  background-color:#fff; 
  width:88%;
  border-radius:10px;
  height:auto;
  gap:15px;
  justify-content:flex-start;
  overflow:scroll;

  ::-webkit-scrollbar-track{
    background:#fff;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #A7AFD0; 
    border-radius:10px;
  }
`;

const NotificationTitle = styled(Text)`
  font-size:1.2rem;
  font-weight:600;
  width:100%;
  text-align:left;
`;

const notifications = [
  {
    id:1,
    title:'Преподаватель',
    text:'Добавил задание по Web proggramming',
    date:'Сегодня 12:00'
  },
  {
    id:2,
    title:'Преподаватель',
    text:'Поставил оценку по Java',
    date:'Сегодня 14:00'
  },
  {
    id:3,
    title:'Преподаватель',
    text:'Добавил задание по PM',
    date:'Сегодня 15:00'
  }
];

function RightBar() {
  const isOpen = useSelector(selectRightbarIsOpen);
  const dispatch = useDispatch();
  // Лодэш посмотреть
  return (
    <Bar isOpen={isOpen}>   
      <Switcher isOpen={isOpen}
        onClick={() => {dispatch(toggle());}}/>
      <Calendar fullscreen={false}/>
      <NotificationWrapper>
        <NotificationTitle>Уведомления</NotificationTitle>
        {notifications.map((notification) => (
          <Notification key={notification.id}
            title={notification.title}
            text={notification.text}
            date={notification.date}
          />
        ))}
      </NotificationWrapper>
    </Bar>
  );
}

export {RightBar};