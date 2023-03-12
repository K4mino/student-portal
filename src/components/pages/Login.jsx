import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import styled from 'styled-components';
import { Form } from 'antd';
import FormItem from 'antd/es/form/FormItem';
//убрать circular dependencies
//сделать barelink для атомов, организмов, и констант
import {Box,Text} from '../atoms';
import FormInput from '../atoms/FormInput';
import  { StyledButton } from '../atoms/Button';
import colors from '../constants/colors';
import { emailRegex, passwordRegex, isInputEmpty } from '../utils/index';
import { Wrapper } from './Registration';

const InputWrapper = styled(Text)`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;
// не тянуть styled компоменты друг из друга 
const StyledEyeIcon = styled(BsFillEyeFill)`
  font-size:1rem;
  position: absolute;
  right: 12px;
  top: 21px;
`;

const StyledEyeHideIcon = styled(BsFillEyeSlashFill)`
  font-size:1rem;
  position: absolute;
  right: 12px;
  top: 21px;
`;

export const StyledLink = styled(Text)`
  width:40%;
  font-size:0.8rem;
  color:#fff;
  font-weight:400;
  text-decoration:underline;
  cursor:pointer;
  font-family:Inter;

  ${({ width }) => width && `width:${width}`};
  ${({ textAlign }) => textAlign && `text-align:${textAlign}`};
 `;

export const Title = styled(Text)`
  text-align:left;
  width:95%;
  font-family:Inter;
  margin:0px 0px 30px;
  color:#fff;
  font-size:1.3rem;
  font-weight:600;
`;

export const ButtonText = styled(Text)`
  font-family:Inter;
  color:#fff;
  font-size:1rem;
  font-weight:600;
`;

export const FormButton = styled(StyledButton)`
  margin:0 0 24px;
  background-color:#5BAFFC;
  width:100%;
  border-radius:8px;
`;

export const FormWrapper = styled(Box)`
  background-color:${colors.formBg};
  margin:0 20px;
  width:24rem;
  border-radius:30px;

  & .ant-form{
    width:100%;
  }
`;

function Login() {
  const navigate = useNavigate();
  const [errorEmailMessage, setErrorEmailMessage] = useState(null);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [form] = Form.useForm();

  const validateEmail = (email) => {
    if(isInputEmpty(email)){
      return setErrorEmailMessage('Email is empty');
    }

    if (!emailRegex.test(email)) {
      return setErrorEmailMessage('Email is not valid');
    }

    return setErrorEmailMessage(null);
  };

  const validatePassword = (password) => {
    if(isInputEmpty(password)){
      return setErrorPasswordMessage('Password is empty');
    }

    if (!passwordRegex.test(password)) {
      return setErrorPasswordMessage('Password is not valid');
    }

    return setErrorPasswordMessage(null);
  };

  const handleLogin = () => {
    const { email, password } = form.getFieldsValue();
  
    validateEmail(email);
    validatePassword(password); 

    if(emailRegex.test(email) && passwordRegex.test(password)){
      navigate('/profile');
    }
  };
  
  // Стили сделать в styled
  // Показ пароля через CSS
  return (
    <Wrapper>
      <FormWrapper>
        <Title>
            Вход
        </Title>
        <Form form={form}
          onFinish={handleLogin}>
          <FormItem name='email'
            noStyle>
            <InputWrapper>
              <FormInput
                top='-26%'
                left='0.6rem'
                errorMessage={errorEmailMessage}
                placeholder='Ваш Email'
                width='100%'
              />
            </InputWrapper>
          </FormItem>
          <FormItem name='password'
            noStyle>
            <InputWrapper>
              <FormInput
                top='-26%'
                left='0.6rem'
                errorMessage={errorPasswordMessage}
                placeholder='Ваш пароль'
                width='100%'
                type={showPassword ? 'text' : 'password'}
              />
              {showPassword ? (
                <StyledEyeIcon
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              ) : (
                <StyledEyeHideIcon
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              )}
            </InputWrapper>
          </FormItem>
          <Box width='100%'
            padding='20px 0px'
            justifyContent='space-between'
            flexDirection='row'>
            <StyledLink
              textAlign='left'
              onClick={() => navigate('/passwordRecovery')}
            >
            Забыли пароль?
            </StyledLink>
            <StyledLink
              textAlign='right'
              onClick={() => navigate('/registration')}
            >
              Зарегестрироваться
            </StyledLink>
          </Box>
          <FormItem noStyle>
            <FormButton
              htmlType='submit'>
              <ButtonText>
                Войти
              </ButtonText>
            </FormButton>
          </FormItem>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
}

export default Login;
