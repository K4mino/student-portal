import React, { useState } from 'react';

import { Wrapper } from './Registration';
import PasswordSendEmail from '../organisms/PasswordSendEmail';
import PasswordEmailConfirm from '../organisms/PasswordEmailConfirm';

const PasswordRecovery = () => {
	const [isEmailSent, setIsEmailSent] = useState(false);

	return (
		<Wrapper>
			{isEmailSent ? (
				<PasswordEmailConfirm/>
			) : (
				<PasswordSendEmail setIsEmailSent={setIsEmailSent}/>
			)}
		</Wrapper>
	);
};

export default PasswordRecovery;
