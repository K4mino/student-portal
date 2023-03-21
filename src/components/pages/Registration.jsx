import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {Input,Button,Form} from 'antd';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import {Box,Text,FormWrapper,FormLink, FormBackground} from '../atoms';
import { emailRules,passwordRules,phoneRules } from '../utils';

const InfoText = styled(Text)`
  text-align:center;
  width:100%;
  font-family:Inter;
  font-size:0.8rem;
  color:#fff;
  padding-top:10px;
  font-weight:400;
`;

const RegistrationTitle = styled(Text)`
  width:auto;
  font-family:Inter;
  color:#fff;
  font-size:1.3rem;
  font-weight:600;
`;

const TitleWrapper = styled(Box)`
  width:95%;
  flex-direction	:row;
  justify-content:space-between;
  align-items:center;
`;


function Registration() {
  const navigate = useNavigate();

  const handleRegistration = () => {
    const [form] = Form.useForm();
    const {email,password} = form.getFieldsValue();
    const auth = getAuth();
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
      });
  };

  return (
    <FormBackground>
      <FormWrapper>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          autoComplete='off'
          onFinish={handleRegistration}>
          <TitleWrapper>
            <RegistrationTitle>
            Регистрация
            </RegistrationTitle>
            <FormLink 
              width='auto'
              onClick={() => navigate('/')}>
            Есть аккаунт? Войти
            </FormLink>
          </TitleWrapper>
          <Form.Item
            name='username'
            className='email-error'
            hasFeedback
            rules={emailRules}>
            <Input 
              placeholder='Ваш Email'
              className='form-input'/>
          </Form.Item>
          <Form.Item
            name='password'
            className='password-error'
            hasFeedback
            rules={passwordRules}>
            <Input.Password 
              placeholder='Ваш пароль'
              className='form-input'/>
          </Form.Item>
          <Form.Item
            name='phone'
            className='phone-error'
            rules={phoneRules}
            hasFeedback>
            <Input 
              placeholder='Ваш телефон'
              className='form-input'/>
          </Form.Item>
          <Form.Item>
            <Button
              htmlType='submit'
              type='primary'
              className='form-button'>
            Продолжить
            </Button>
          </Form.Item>
        </Form>
        <InfoText>
          Нажимая кнопку “Продолжить”, Вы принимаете условия Публичной оферты
        </InfoText>
      </FormWrapper>
    </FormBackground>
  );
}

export default Registration;
