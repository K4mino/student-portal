import React from 'react';
import styled from 'styled-components';

import { Box } from './Box';
import colors from '../constants/colors';

const Wrapper = styled(Box)`
background-color:${colors.formBg};
margin:0 20px;
width:24rem;
border-radius:30px;

& .ant-form{
  width:100%;
}
`;

const FormWrapper = (props) => {
  const {children,...rest} = props;
  return (
    <Wrapper rest={rest}>
      {children}
    </Wrapper>
  );
};

export {FormWrapper};