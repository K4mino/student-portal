import React, { useState,useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//import styled from 'styled-components';

import Input from '../atoms/Input';
import Box from '../atoms/Box';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import colors from '../constants/colors';
import Link from '../atoms/Link';
import Error from '../atoms/Error';
import {emailRegex,passwordRegex,isInputEmpty} from '../utils/index';

import { Wrapper } from './Registration';
//@Todo после удачного логина сбрасывать рефы, навигейт, сделать кнопку для просмотра пароля, решить проблему с сдвигающей ошибкой подсказка pos:absolute
const Login = () => {
	const navigate = useNavigate();

	const emailRef = useRef('');
	const passwordRef = useRef('');
	const [errorEmailMessage,setErrorEmailMessage] = useState(null);
	const [errorPasswordMessage,setErrorPasswordMessage] = useState(null);

	const handleLogin = () => {
		if(isInputEmpty(emailRef.current.value) || isInputEmpty(passwordRef.current.value)){
			return validateEmail();
		}

		if(errorEmailMessage || errorPasswordMessage){
			return validateEmail();
		}

		alert('Success')
	}

	const handleEmailBlur = () => {
		validateEmail();
	};

	const validateEmail = () => {
		let emailValue = emailRef.current.value;

		if(isInputEmpty(emailValue)){
			return setErrorEmailMessage('Email is empty')
		}

		if(!emailRegex.test(emailValue)){
			return setErrorEmailMessage('Email is not valid')
		}

		return setErrorEmailMessage(null);
	}

	const handleLoginNavigate = () => {
		navigate('/dashBoard');
	}
	return (
		<Wrapper>
			<Box
				backgroundColor={colors.formBg}
				margin='0 20px'
				width='24rem'
				borderRadius='30px'
			>
				<Text
					textAlign='left'
					width='95%'
					fontFamily='Inter'
					margin='0px 0px 24px'
					color='#fff'
					fontSize='1.3em'
					fontWeight='600'
				>
          Вход
				</Text>
				<Input 
					errorMessage={errorEmailMessage}
					ref={emailRef}
					onBlur={handleEmailBlur}
					placeholder='Ваш Email'
					width='92%' />
				<Input 
					ref={passwordRef}
					placeholder='Ваш пароль' 
					width='92%' 
					type='password'/>
				<Box width='100%' 
					justifyContent='space-between' 
					flexDirection='row'>
					<Link
						textAlign='left'
						onClick={() => navigate('/passwordRecovery')}
						width='30%'
						fontSize='0.8rem'
						color='#fff'
						fontWeight='400'
					>
            Забыли пароль?
					</Link>
					<Link
						onClick={() => navigate('/registration')}
						textAlign='right'
						width='40%'
						fontSize='0.8rem'
						color='#fff'
						fontWeight='400'
					>
            Зарегестрироваться
					</Link>
				</Box>
				<Button
					onClick={handleLogin}
					margin='0 0 24px'
					backgroundColor='#5BAFFC'
					width='100%'
					borderRadius='8px'
				>
					<Text
						fontFamily='Inter'
						color='#fff'
						fontSize='1rem'
						fontWeight='600'
					>
            Войти
					</Text>
				</Button>
			</Box>
		</Wrapper>
	);
};

export default Login;
