import React from 'react';
import styled from 'styled-components';

import { Text } from './Text';

const StyledLink = styled(Text)`
  width:40%;
  font-size:0.8rem;
  color:#fff;
  font-weight:400;
  text-decoration:underline;
  cursor:pointer;
  font-family:Inter;

  ${({ width }) => width && `width:${width}`};
  ${({ textAlign }) => textAlign && `text-align:${textAlign}`};
 `;

const FormLink = ({children,width,textAlign,onClick,...rest}) => {
  return (
    <StyledLink
      onClick={onClick}
      rest={rest}
      width={width}
      textAlign={textAlign}
    >{children}</StyledLink>
  );
};

export {FormLink};