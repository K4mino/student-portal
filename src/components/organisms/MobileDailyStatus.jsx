import React,{useState,useEffect,useContext} from 'react';
import { Calendar,momentLocalizer } from 'react-big-calendar';
import styled from 'styled-components';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { db } from '../../firebase';
import { getDoc,doc } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';
import moment from 'moment';
//import { DailyStatus } from '../atoms';

const Wrapper = styled.div`
    width:100%;
`;

const MobileDailyStatus = () => {
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

  const convertedLessons = lessons?.map((item) => {return {...item,start:item?.start.toDate(),end:item?.end.toDate()};});
  console.log(convertedLessons);

  const localizer = momentLocalizer(moment);

  return convertedLessons?.length > 0 ? (
    
    <Wrapper>
      <Calendar
        localizer={localizer}
        events={convertedLessons}
        startAccessor='start'
        endAccessor='end'
        defaultView='day'
        views/>
    </Wrapper>
  ) : null;
};

export default MobileDailyStatus;