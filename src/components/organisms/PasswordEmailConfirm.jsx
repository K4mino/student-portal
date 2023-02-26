import React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '../atoms/Box';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import colors from '../constants/colors';

const PasswordEmailConfirm = () => {
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
            Письмо отправлено
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
            Перейдите по ссылке в письме для восстановления пароля
			</Text>
			<Button
				onClick={() => navigate('/')}
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
              На главную
				</Text>
			</Button>
		</Box>
	);
};

export default PasswordEmailConfirm;