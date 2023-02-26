import React, { useState,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import {BsFillEyeFill,BsFillEyeSlashFill} from 'react-icons/bs';
import styled from 'styled-components';
//import styled from 'styled-components';

import Input from '../atoms/Input';
import Box from '../atoms/Box';
import Text,{StyledText} from '../atoms/Text';
import Button from '../atoms/Button';
import colors from '../constants/colors';
import Link from '../atoms/Link';
import {emailRegex,passwordRegex,isInputEmpty} from '../utils/index';

import { Wrapper } from './Registration';

//@Todo после удачного логина сбрасывать рефы, навигейт, сделать кнопку для просмотра пароля,

const InputWrapper = styled(StyledText)`
	position:relative;
	display:flex;
	justify-content:center;
	margin: 0 auto;
	width:100%;
`;

const StyledEye = styled(BsFillEyeFill)`
	position:absolute;
	right:10px;
	top:18px;
`;

const StyledEyeHide = styled(BsFillEyeSlashFill)`
	position:absolute;
	right:12px;
	top:18px;
`;


const Login = () => {
	const navigate = useNavigate();

	const emailRef = useRef('');
	const passwordRef = useRef('');
	const [errorEmailMessage,setErrorEmailMessage] = useState(null);
	const [errorPasswordMessage,setErrorPasswordMessage] = useState(null);
	const [showPassword,setShowPassword] = useState(false);

	const handleLogin = () => {
		if(isInputEmpty(emailRef.current.value) || isInputEmpty(passwordRef.current.value)){
			return validateEmail();
		}

		if(errorEmailMessage || errorPasswordMessage){
			return validateEmail();
		}

		handleLoginNavigate()
	}

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

	const handleEmailBlur = () => {
		validateEmail();
	};

	const validatePassword = () => {
		let passwordValue = passwordRef.current.value;

		if(isInputEmpty(passwordValue)){
			return setErrorPasswordMessage('Password is empty')
		}

		if(!passwordRegex.test(passwordValue)){
			return setErrorPasswordMessage('Password is not valid')
		}

		return setErrorPasswordMessage(null)
	}

	const handlePasswordBlur = () => {
		validatePassword();
	}

	const handleLoginNavigate = () => {
		emailRef.current.value = '';
		passwordRef.current.value = '';
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
					margin='0px 0px 30px'
					color='#fff'
					fontSize='1.3em'
					fontWeight='600'
				>
          Вход
				</Text>
				<InputWrapper>
					<Input
						top='-23%'
						left='0.6rem'
						errorMessage={errorEmailMessage}
						ref={emailRef}
						onBlur={handleEmailBlur}
						placeholder='Ваш Email'
						width='92%' />
				</InputWrapper>
				<InputWrapper>
					<Input 
						top='-23%'
						left='0.6rem'
						ref={passwordRef}
						errorMessage={errorPasswordMessage}
						placeholder='Ваш пароль' 
						onBlur={handlePasswordBlur}
						width='100%' 
						type={showPassword ? 'text':'password'}/>
					{showPassword ? <StyledEye onClick={() => setShowPassword(prev => !prev)}/> : <StyledEyeHide onClick={() => setShowPassword(prev => !prev)}/>}
				</InputWrapper>
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
					onClick={() => handleLogin()}
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
