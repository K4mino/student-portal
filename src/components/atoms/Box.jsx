import React from 'react';
import styled from 'styled-components';

import spacings from '../constants/spacings';

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position:relative;
  justify-content:center;

  padding: ${spacings.medium};
  
  ${({$margin }) => $margin && `margin:${$margin}`};
  ${({$width }) => $width && `width:${$width}`};
  ${({$height }) => $height && `height:${$height}`};
  ${({$borderRadius }) => $borderRadius && `border-radius:${$borderRadius}`};
  ${({$alignItems }) => $alignItems && `align-items:${$alignItems}`};
  ${({$justifyContent}) => $justifyContent && `justify-content:${$justifyContent}`};
  ${({$backgroundColor}) => $backgroundColor && `background-color:${$backgroundColor}`};
  ${({$flexDirection}) => $flexDirection && `flex-direction:${$flexDirection}`};
  ${({$gap}) => $gap && `gap:${$gap}`};
`;
const Box = (props) => {
	return (
		<StyledBox
			$flexDirection={props.flexDirection}
			$alignItems={props.alignItems}
			$justifyContent={props.justifyContent}
			$backgroundColor={props.backgroundColor}
			$margin={props.margin}
			$width={props.width}
			$borderRadius={props.borderRadius}
			$height={props.height}
			$gap={props.gap	}
		>
			{props.children}
		</StyledBox>
	);
};

export default Box;
