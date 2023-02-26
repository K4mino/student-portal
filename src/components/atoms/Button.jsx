/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import spacings from '../constants/spacings';

const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor:pointer;

  padding: ${spacings.medium};

  ${({backgroundColor}) => backgroundColor && `background-color:${backgroundColor}`};
  ${({ width }) => width && `width:${width}`};
  ${({ borderRadius }) => borderRadius && `border-radius:${borderRadius}`};
  ${({ margin }) => margin && `margin:${margin}`};

  &:hover {
	background-color:#2E5BF0;
  }
`;
const Button = (props) => {
	return (
		<StyledButton
			onClick={props.onClick}
			margin={props.margin}
			borderRadius={props.borderRadius}
			width={props.width}
			backgroundColor={props.backgroundColor}
		>
			{props.children}
		</StyledButton>
	);
};

export default Button;
