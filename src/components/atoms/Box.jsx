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
  ${({$padding}) => $padding && `padding:${$padding}`};
  ${({$position}) => $position && `position:${$position}`};
`;
function Box(props) {
  const {flexDirection,alignItems,justifyContent,backgroundColor,margin ,width,borderRadius
    ,height ,gap,padding,onClick,position, className ,children} =props;

  return (
    <StyledBox
      $flexDirection={flexDirection}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $backgroundColor={backgroundColor}
      $margin={margin}
      $width={width}
      $borderRadius={borderRadius}
      $height={height}
      $gap={gap	}
      $padding={padding}
      onClick={onClick}
      $position={position}
      className={className}
    >
      {children}
    </StyledBox>
  );
}

export {Box};
