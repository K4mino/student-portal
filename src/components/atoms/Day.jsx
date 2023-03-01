import React from 'react';
import styled from 'styled-components';

const StyledDay = styled.div`
    border:1px solid #E6EEF1;
    text-align:left;
    width:100%;
    height:100px;
`;

const Day = (props) => {
	return (
		<StyledDay>
			{props.children}
		</StyledDay>
	);
};

export default Day;