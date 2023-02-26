import React from 'react';
import styled from 'styled-components';

import colors from '../constants/colors';
import spacings from '../constants/spacings';

const StyledInput = styled.input`
	border-radius:13px;
	border:none;
	outline:none;
	font-family:Inter;
	font-size:0.8rem;
    
	padding:${spacings.medium};
    color:${colors.placeholder};
	margin-bottom:${spacings.medium};

    ${({width}) => width && `width:${width}`};
`;

const Input = ({placeholder = '',width,type = 'text',onChange,onBlur,value}) => {
	return (
		<StyledInput 
			value={value} 
			placeholder={placeholder} 
			width={width} 
			type={type} 
			onChange={onChange}
			onBlur={onBlur}/>
	);
};

export default Input;