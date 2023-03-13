import React from 'react';
import styled from 'styled-components';

import { Text } from './Text';

const Title = styled(Text)`
  text-align:left;
  width:95%;
  font-family:Inter;
  margin:0px 0px 30px;
  color:#fff;
  font-size:1.3rem;
  font-weight:600;
`;

const FormTitle = (props) => {
  const {className,children,...rest} = props;
  return (
    <Title rest={rest}
      className={className}>
      {children}
    </Title>
  );
};

export {FormTitle};