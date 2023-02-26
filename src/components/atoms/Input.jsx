import React from 'react';
import styled from 'styled-components';

import colors from '../constants/colors';
import Error from './Error';
import spacings from '../constants/spacings';
import { isInputEmpty } from '../utils';

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

const Input = React.forwardRef(({placeholder = '',width,type = 'text',onChange,onBlur,value,errorMessage},ref) => {
	console.log(errorMessage)
	return (
		<>
		{errorMessage && <Error errorMessage={errorMessage}/>}
		<StyledInput 
			value={value} 
			placeholder={placeholder} 
			width={width} 
			type={type} 
			onChange={onChange}
			onBlur={onBlur}
			ref={ref}
			/>
		</>
	);
});

export default Input;