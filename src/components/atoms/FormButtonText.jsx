import React from 'react';
import styled from 'styled-components';

import {Text} from './Text';

const ButtonText = styled(Text)`
  font-family:Inter;
  color:#fff;
  font-size:1rem;
  font-weight:600;
`;

const FormButtonText = (props) => {
  const {className,children,...rest} = props;
  <ButtonText 
    rest={rest}
    className={className}>
    {children}
  </ButtonText>;
};

export {FormButtonText};