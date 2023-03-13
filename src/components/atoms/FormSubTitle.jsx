import React from 'react';
import styled from 'styled-components';

import { Text } from './Text';

const Subtitle = styled(Text)`
  text-align:left;
  width:95%;
  font-family:Inter;
  font-size:0.8rem;
  color:#fff;
  font-weight:400;
  margin:0px 0px 24px;
`;


const FormSubTitle = ({children,className}) => {
  return (
    <Subtitle 
      className={className}>
      {children}</Subtitle>
  );
};

export {FormSubTitle};