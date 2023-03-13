import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import styled from 'styled-components';
import { Form } from 'antd';
import FormItem from 'antd/es/form/FormItem';
//сделать barelling для атомов, организмов, и констант
import {Text,FormButton,FormButtonText,FormTitle,FormWrapper,FormLink,FormBackground,FormInput, Box} from '../atoms';
import { emailRegex, passwordRegex, isInputEmpty } from '../utils/index';

const InputWrapper = styled(Text)`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;

const StyledEyeIcon = styled(BsFillEyeFill)`
  position:absolute;
  right:5px;
  display:none;

  ${({showPassword}) => showPassword && 'display:block'};
`;

const StyledEyeHideIcon = styled(BsFillEyeSlashFill)`
  position:absolute;
  right:5px;
  display:block;

  ${({showPassword}) => showPassword && 'display:none'};
`;

const LinkWrapper = styled(Box)`
  width:100%;
  padding:20px 0px;
  justify-content:space-between;
  flex-direction:row;
`;

const IconWrapper = styled.div`
  font-size:1rem;
  position: absolute;
  right: 12px;
  top: 21px;

`;

function Login() {
  const navigate = useNavigate();
  const [errorEmailMessage, setErrorEmailMessage] = useState(null);
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [form] = Form.useForm();

  const IsEmailValid = (email) => {
    if(isInputEmpty(email)){
      setErrorEmailMessage('Email is empty');
      return false; 
    }

    if (!emailRegex.test(email)) {
      setErrorEmailMessage('Email is not valid');
      return false;
    }

    setErrorEmailMessage(null);
    return true;
  };

  const IsPasswordValid = (password) => {
    if(isInputEmpty(password)){
      setErrorPasswordMessage('Password is empty');
      return false;
    }

    if (!passwordRegex.test(password)) {
      setErrorPasswordMessage('Password is not valid');
      return false;
    }

    setErrorPasswordMessage(null);
    return true;
  };

  const handleLogin = () => {
    const { email, password } = form.getFieldsValue();

    if(IsEmailValid(email) && IsPasswordValid(password)){
      navigate('/profile');
    }
  };
  
  return (
    <FormBackground>
      <FormWrapper>
        <FormTitle>
            Вход
        </FormTitle>
        <Form form={form}
          onFinish={handleLogin}>
          <FormItem name='email'
            noStyle>
            <InputWrapper>
              <FormInput
                errorMessage={errorEmailMessage}
                placeholder='Ваш Email'
              />
            </InputWrapper>
          </FormItem>
          <FormItem name='password'
            noStyle>
            <InputWrapper>
              <FormInput
                errorMessage={errorPasswordMessage}
                placeholder='Ваш пароль'
                type={showPassword ? 'text' : 'password'}
              />
              <IconWrapper onClick={() => setShowPassword((prev) => !prev)}>
                <StyledEyeIcon showPassword={showPassword}
                  className='show'/>
                <StyledEyeHideIcon showPassword={showPassword}
                  className='hide'/>
              </IconWrapper>
            </InputWrapper>
          </FormItem>
          <LinkWrapper>
            <FormLink
              textAlign='left'
              onClick={() => navigate('/passwordRecovery')}
            >
            Забыли пароль?
            </FormLink>
            <FormLink
              textAlign='right'
              onClick={() => navigate('/registration')}
            >
              Зарегестрироваться
            </FormLink>
          </LinkWrapper>
          <FormItem 
            noStyle>
            <FormButton
              htmlType='submit'>
              <FormButtonText>
                Войти
              </FormButtonText>
            </FormButton>
          </FormItem>
        </Form>
      </FormWrapper>
    </FormBackground>
  );
}

export default Login;
