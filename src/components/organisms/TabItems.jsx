import React from 'react';
import styled from 'styled-components';

import {Text,Box} from '../atoms';
import colors from '../constants/colors';

const TabInfo = styled(Text)`
    background-color:#fff;
    border-radius:18px;
    height:40px;
    padding:10px;
`;

const TabBody = styled(Box)`
    width:70%;
    border-radius:18px;
    background-color:${colors.boxBackground.firstColor};

    @media(max-width:760px){
      width:92%;
    }
`;


function TabItems({rows}) {
  return (
    <TabBody>
      {
        rows.map((info) => (
          <Box flexDirection='row'
            justifyContent='space-between'
            width='100%'
            key={info.key}>
            <Text fontWeight='400'
              fontSize='0.7rem'>{info.rowLabel}</Text>
            <TabInfo width='60%'
              fontWeight='400'
              fontSize='0.7rem'>{info.rowInfo}</TabInfo>
          </Box>
        ))
      }
    </TabBody>
  );
}

export {TabItems};