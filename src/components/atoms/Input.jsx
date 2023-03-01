import React from 'react';
import styled from 'styled-components';

import colors from '../constants/colors';
import Error from './Error';
import spacings from '../constants/spacings';

export const StyledInput = styled.input`
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

const Input = React.forwardRef(({placeholder = '',width,type = 'text',onChange,onBlur,value,errorMessage,top,left},ref) => {

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
				ref={ref}
			/>
		</>
	);
});

Input.displayName = 'Input';

export default Input;