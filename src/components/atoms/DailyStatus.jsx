import React, { useState } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { doc, getDoc } from 'firebase/firestore';

import { db } from '../../firebase';
import { Box } from './Box';
import { Text } from './Text';
import { AuthContext } from '../../context/AuthContext';
import dateFormat  from '../constants/date';
import { useEffect } from 'react';

/* const events = [
  {
    day:14,
    month:2,
    date:'Tue Mar 14 2023 00:00:00 GMT+0600 (Восточный Казахстан)',
    event:'Web dev',
    eventType:'lesson'
  },
  {
    day:20,
    month:2,
    date:'Tue Mar 20 2023 00:00:00 GMT+0600 (Восточный Казахстан)',
    event:'Web dev',
    eventType:'lesson'
  },
  {
    day:28,
    month:2,
    date:'Tue Mar 28 2023 19:40:26 GMT+0600 (Восточный Казахстан)',
    event:'Java',
    eventType:'lesson'
  },
]; */

const StyledStatus = styled.div`
	background-color:#B6EEC3;
	border-radius:10px;
	width:80%;
	padding:5px;
`;


function DailyStatus({date}) {
  const {currentUser} = useContext(AuthContext);
  const [lessons,setLessons] = useState([]);
  useEffect(() => {
    const getData = async() => {
      try {
        const res = await getDoc(doc(db,'users',currentUser.uid));
        const userData = await res.data();
        let list = [];
        for (const item of userData.lessons){
          const path = item.path;
          const lessonId = path.split('/').pop();
          const lesson = await getDoc(doc(db,'lessons',lessonId));
          list.push(lesson.data());
        }
        setLessons(list);
      } catch (error) {
        console.log(error);
      }
    };

    currentUser.uid && getData();
  },[currentUser.uid]); 

  const selectedDate = date.$d; 
  const selectedDayEvent = lessons?.filter((lesson) => dateFormat(lesson.start.toDate()) == dateFormat(selectedDate));

  return selectedDayEvent?.length > 0 ? (
    <StyledStatus>
      {selectedDayEvent?.map((lesson) => (
        <Box 
          key={lesson?.name}
          padding='0'>
          <Text>{lesson?.title}</Text>
          <Text>{lesson?.cabinet}</Text>
          <Text>{lesson?.start.toDate().getHours()}:{lesson?.start.toDate().getMinutes().toString().padStart(2, '0')}</Text>
        </Box>))} 
    </StyledStatus> 
  ) : null ;
}

export {DailyStatus};