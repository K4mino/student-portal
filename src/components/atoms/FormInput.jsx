import React from 'react';
import { Input} from 'antd';
import styled from 'styled-components';

import spacings from '../constants/spacings';
import colors from '../constants/colors';

import Error from './Error';


export const StyledInput = styled(Input)`
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

function FormInput({placeholder = '',width,type = 'text',value,onChange,onBlur,errorMessage,top,left}) {
	
  return (
    <>	
      {errorMessage && <Error 
        top={top} 
        left={left} 
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

FormInput.displayName = 'FormInput';

export default FormInput;