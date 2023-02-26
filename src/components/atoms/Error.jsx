import React from 'react';

import Text from './Text';

const Error = ({errorMessage}) => {
	console.log(errorMessage)
	return (
		<Text
			color='#8B0000'
			fontSize='0.9rem'
			fontWeight='500'
			textAlign='left'
			width='100%'
		>
			{errorMessage}
		</Text>
	);
};

export default Error;
