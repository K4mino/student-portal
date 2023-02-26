import React from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../atoms/Input';
import Box from '../atoms/Box';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import colors from '../constants/colors';
import Link from '../atoms/Link';

const PasswordSendEmail = ({setIsEmailSent}) => {
	const navigate = useNavigate();

	return (
		<Box backgroundColor={colors.formBg}
			margin='0 20px'
			width='24rem'
			borderRadius='30px'>
			<Text
				textAlign='left'
				width='95%'
				fontFamily='Inter'
				margin='0px 0px 24px'
				color='#fff'
				fontSize='1.3rem'
				fontWeight='600'
			>
            Восстановить пароль
			</Text>
			<Text
				textAlign='left'
				width='95%'
				fontFamily='Inter'
				fontSize='0.8rem'
				color='#fff'
				fontWeight='400'
				margin='0px 0px 24px'
			>
            На Ваш e-mail будет выслана ссылка для восстановления пароля
			</Text>
			<Input placeholder='Ваш Email'
				width='92%' />
			<Button
				onClick={() => setIsEmailSent(true)}
				margin='0 0 24px'
				backgroundColor='#5BAFFC'
				width='100%'
				borderRadius='8px'
			>
				<Text
					fontFamily='Inter'
					color='#fff'
					fontSize='20px'
					fontWeight='600'
				>
              Восстановить пароль
				</Text>
			</Button>
			<Link
				cursor='pointer'
				onClick={() => navigate('/')}
				textAlign='right'
				width='95%'
				fontFamily='Inter'
				fontSize='16px'
				color='#fff'
				fontWeight='400'
			>
            Вернуться на страницу входа
			</Link>
		</Box>
	);
};

export default PasswordSendEmail;