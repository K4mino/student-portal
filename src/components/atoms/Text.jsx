import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
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

function Text(props){
  const {cursor,display,justifyContent,textAlign,margin ,width,fontFamily
    ,fontSize ,color,fontWeight,textDecoration,children,onClick,...rest} =props;

  return (
    <StyledText
      cursor={cursor}
      onClick={onClick}
      justifyContent={justifyContent}
      display={display}
      textAlign={textAlign}
      width={width}
      margin={margin}
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      textDecoration={textDecoration}
      rest={rest}
    >
      {children}
    </StyledText>
  );
};

export {Text};
