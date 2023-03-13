import React from 'react';
import styled from 'styled-components';

import dateFormat  from '../constants/date';

const events = [
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
];

const StyledStatus = styled.div`
	background-color:#B6EEC3;
	border-radius:10px;
	width:80%;
	padding:5px;
`;
// Формат даты , привести даты  в один формат
function DailyStatus({date}) {
  const selectedDate = date.$d;

  const selectedDayEvent = events.filter((event) => dateFormat(selectedDate) === dateFormat(event.date));
  return selectedDayEvent.length > 0 ?(
    <StyledStatus>
      {selectedDayEvent.map((event) => `${event.event  } ${ event.eventType}`)}
    </StyledStatus> 
  ): null;
}

export {DailyStatus};