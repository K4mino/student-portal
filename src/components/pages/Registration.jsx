import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Input from '../atoms/Input';
import Box from '../atoms/Box';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import waveRight from '../../images/waveRight.png';
import waveLeft from '../../images/waveLeft.png';
import colors from '../constants/colors';
import Link from '../atoms/Link';

/*
    1.Импорты библиотек
    2.абсолютные файлы
    3.относительные файлы
*/

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url(${waveRight});
    z-index: -1;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${waveLeft});
    background-position: bottom;
    background-repeat: no-repeat;
    background-image: 100%;
    z-index: -1;
  }

  @media (max-width: 660px) {
    &:after,
    &:before {
      background-size: 200%;
    }
  }
`;

const Registration = () => {
	const navigate = useNavigate();

	return (
		<Wrapper>
			<Box backgroundColor={colors.formBg}
				margin='0 20px'
				width='24rem'
				borderRadius='30px'>
				<Box width='95%'
					flexDirection	='row'
					justifyContent='space-between'
					alignItems='center'>
					<Text
						fontFamily='Inter'
						color='#fff'
						fontSize='1.3rem'
						fontWeight='600'
					>
            Регистрация
					</Text>
					<Link
						color='#fff'
						cursor='pointer'
						fontFamily='Inter'
						fontSize='0.8rem'
						fontWeight='400'
						onClick={() => navigate('/')}
					>
            Есть аккаунт? Войти
					</Link>
				</Box>
				<Input placeholder='Ваш Email'
					width='92%' />
				<Input placeholder='Ваш пароль'
					width='92%' />
				<Input placeholder='Ваш телефон'
					width='92%' />
				<Button
					margin='0 0 24px'
					backgroundColor='#5BAFFC'
					width='100%'
					borderRadius='8px'
				>
					<Text
						textAlign='center'
						fontFamily='Inter'
						color='#fff'
						fontSize='20px'
						fontWeight='600'
					>
            Продолжить
					</Text>
				</Button>
				<Text
					textAlign='center'
					width='80%'
					fontFamily='Inter'
					fontSize='0.8rem'
					color='#fff'
					fontWeight='400'
				>
          Нажимая кнопку “Продолжить”, Вы принимаете условия Публичной оферты
				</Text>
			</Box>
		</Wrapper>
	);
};

export default Registration;
