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


function TabItems({rows}) {
  return (
    <Box width='70%'
      borderRadius='18px'
      backgroundColor={colors.boxBackground.firstColor}>
      {
        rows.map((info) => (
          <Box flexDirection='row'
            justifyContent='space-between'
            width='100%'
            key={info.key}>
            <Text fontWeight='400'
              fontSize='0.9rem'>{info.rowLabel}</Text>
            <TabInfo width='60%'
              fontWeight='400'
              fontSize='0.9rem'>{info.rowInfo}</TabInfo>
          </Box>
        ))
      }
    </Box>
  );
}

export {TabItems};