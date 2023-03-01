import React from 'react';
import styled from 'styled-components';

import{ StyledText } from './Text';

const Title = styled(StyledText)`
    font-size:1.6rem;
    font-weight:600;
    color:#000000;
`;

const PageTitle = (props) => {
	return (
		<Title>
			{props.children}
		</Title>
	);
};

export default PageTitle;