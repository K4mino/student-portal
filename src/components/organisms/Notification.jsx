import React from 'react';

import {Box,Text} from '../atoms';
import colors from '../constants/colors';

const Notification = ({title,text,date}) => {
  return (
    <Box width='95%'
      padding='10px'
      borderRadius='10px'
      gap='10px'
      backgroundColor={colors.boxBackground.firstColor}
    >
      <Text fontWeight='600'
        fontSize='0.7rem'
        textAlign='left'
        width='100%'
      >{title}</Text>
      <Text fontWeight='400'
        fontSize='0.7rem'
        textAlign='left'
        width='100%'
      >{text}</Text>
      <Text width='100%'
        textAlign='right'
        fontSize='0.6rem'
        fontWeight='400'
        color='#5B5B5B'
      >{date}</Text>
    </Box>
  );
};

export default Notification;