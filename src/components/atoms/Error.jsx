import React from 'react';
import styled from 'styled-components';

import {Text} from './Text';

const StyledError = styled(Text)`
	position:absolute;
	color:#8B0000;
	font-size:0.9rem;
	font-weight:500;
	text-align:left;
	width:100%;

	${({top}) => top && `top:${top}`};
	${({left}) => left && `left:${left}`};
`;

function Error({errorMessage,top,left}) {

  return (
    <StyledError 
      top={top} 
      left={left}>
      {errorMessage}
    </StyledError>
  );
}

export default Error;
