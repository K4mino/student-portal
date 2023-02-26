import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    ${({$margin}) => $margin && `margin:${$margin}`};
`;

const Img = ({src,alt,margin}) => {
	return (
		<StyledImage 
			$margin={margin} 
			src={src} 
			alt ={alt}/>
	);
};

export default Img;