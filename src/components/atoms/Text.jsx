import React from 'react';
import styled from 'styled-components';

export const StyledText = styled.div`
  text-align:center;
  position:relative;

  ${({ fontSize }) => fontSize && `font-size:${fontSize}`};
  ${({ color }) => color && `color:${color}`};
  ${({ fontWeight }) => fontWeight && `font-weight:${fontWeight}`};
  ${({ fontFamily }) => fontFamily && `font-family:${fontFamily}`};
  ${({ margin }) => margin && `margin:${margin}`};
  ${({ width }) => width && `width:${width}`};
  ${({ textAlign }) => textAlign && `text-align:${textAlign}`};
  ${({ cursor }) => cursor && `cursor:${cursor}`};
  ${({textDecoration}) => textDecoration && `text-decoration:${textDecoration}`};
`;

const Text = (props) => {
	return (
		<StyledText
			cursor={props.cursor}
			onClick={props.onClick}
			justifyContent={props.justifyContent}
			display={props.display}
			textAlign={props.textAlign}
			width={props.width}
			margin={props.margin}
			fontFamily={props.fontFamily}
			fontSize={props.fontSize}
			color={props.color}
			fontWeight={props.fontWeight}
			textDecoration={props.textDecoration}
			props
		>
			{props.children}
		</StyledText>
	);
};

export default Text;
