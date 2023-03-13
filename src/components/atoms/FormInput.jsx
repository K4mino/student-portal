import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

import spacings from '../constants/spacings';
import colors from '../constants/colors';
import Error from './Error';


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

    ${({width}) => width && `width:${width}`};
`; 

function FormInput({placeholder = '',width,type = 'text',value,onChange,onBlur,errorMessage}) {
	
  return (
    <>	
      {errorMessage && <Error 
        top='-26%' 
        left='0.6rem' 
        errorMessage={errorMessage}/>}
      <StyledInput
        value={value}
        placeholder={placeholder} 
        width={width} 
        type={type} 
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
}

export {FormInput};