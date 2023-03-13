import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

import spacings from '../constants/spacings';
import colors from '../constants/colors';

const StyledInput = styled(Input)`
  width:100%;
	border-radius:13px;
	border:none;
	outline:none;
	font-family:Inter;
	font-size:0.8rem;
	padding:${spacings.medium};
  color:${colors.placeholder};
	margin-bottom:1.9rem;
  width:100%;
`; 

function FormInput() {
  return (
    <StyledInput/>
  );
}

export {FormInput};