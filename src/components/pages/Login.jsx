import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import styled from 'styled-components';

import Input from '../atoms/Input';
import Box from '../atoms/Box';
import Text from '../atoms/Text';
import Button from '../atoms/Button';
import colors from '../constants/colors';
import Link from '../atoms/Link';
import Error from '../atoms/Error';

import { Wrapper } from './Registration';

const Login = () => {
	const navigate = useNavigate();

	const [isEmailNotValid,setIsEmailNotValid] = useState(false);
	const [isPasswordNotValid,setIsPasswordNotValid] = useState(false);
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');

	const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
	const passwordRegex =  new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/);

	const emailValidation = (email) => {
		if(!emailRegex.test(email)){
			setIsEmailNotValid(true);
		}else{
			setIsEmailNotValid(false);
		}
	};

	const passwordValidation = (password) => {
		if(!passwordRegex.test(password)){
			setIsPasswordNotValid(true);
		}else {
			setIsPasswordNotValid(false);
		}
	};

	const login = () => {
		if(isEmailNotValid == false && isPasswordNotValid == false && email !== '' && password !== ''){
			navigate('/dashBoard');
		}

		if(email == '' || password == ''){
			alert('Enter your email and password');
		}
	};
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
				{
					isEmailNotValid && <Error>Bad format of email, please check it!</Error>
				}
				<Input 
					onBlur={(e) => emailValidation(e.target.value)} 
					onChange={(e)=> {setIsEmailNotValid(false) ;setEmail(e.target.value);}} 
					placeholder='Ваш Email'
					width='92%' />
				{
					isPasswordNotValid && <Error>Bad format of password, please check it!</Error>
				}
				<Input onBlur={(e) => passwordValidation(e.target.value)} 
					onChange={(e)=> {setIsPasswordNotValid(false); setPassword(e.target.value);}}
					value={password}
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
					onClick={login}
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
