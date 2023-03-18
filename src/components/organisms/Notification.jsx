import React from 'react';
import styled from 'styled-components';

import {Box,Text} from '../atoms';
import colors from '../constants/colors';

const NotificationWrapper = styled(Box)`
  width:95%;
  padding:10px;
  border-radius:10px;
  gap:10px;
  background-color:${colors.boxBackground.firstColor};
`;

const NotificationText = styled(Text)`
  font-size:0.7rem;
  text-align:left;
  width:100%;
`;

const NotificationTime = styled(Text)`
  width:100%;
  text-align:right;
  font-size:0.6rem;
  font-weight:400;
  color:#5B5B5B;
`;

const Notification = ({title,text,date}) => {
  return (
    <NotificationWrapper>
      <NotificationText 
        fontWeight='600'>
        {title}
      </NotificationText>
      <NotificationText 
        fontWeight='400'>
        {text}</NotificationText>
      <NotificationTime>
        {date}
      </NotificationTime>
    </NotificationWrapper>
  );
};

export {Notification};