import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Form,Input,Button, Modal } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';

import {auth} from '../../firebase';
import {FormTitle,FormWrapper,FormLink,FormBackground, Box} from '../atoms';
import { emailRules,passwordRules } from '../utils';
import { useState } from 'react';

const LinkWrapper = styled(Box)`
  width:100%;
  padding:20px 0px;
  justify-content:space-between;
  flex-direction:row;
`;

function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [hasError,setHasError] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');

  const handleLogin = async() => {
    const {email,password} = form.getFieldsValue();
   
    try {
      await signInWithEmailAndPassword(auth,email,password);
      navigate('/profile');
    } catch (error) {
      setHasError(true);
      setErrorMessage(error.message);
      console.log(error);
    }
  };
  
  return (
    <FormBackground>
      {hasError && 
      <Modal 
        title={errorMessage}
        open={hasError}
        onCancel={()=>setHasError(false)}
        footer={[
          <Button 
            key='ok'
            type='primary'
            onClick={()=> setHasError(false)}>OK</Button>
        ]}>
      </Modal>}
      <FormWrapper>
        <FormTitle>
            Вход
        </FormTitle>
        <Form
          form={form}
          name='basic'
          initialValues={{ remember: true }}
          autoComplete='off'
          onFinish={handleLogin}>
          <Form.Item
            name='email'
            className='email-error'
            hasFeedback
            rules={emailRules}>
            <Input 
              placeholder='Введите ваш email'
              className='form-input'
            />
          </Form.Item>
          <Form.Item
            name='password'
            className='password-error'
            hasFeedback
            rules={passwordRules}
          >
            <Input.Password 
              placeholder='Введите ваш пароль'
              className='form-input'
            />
          </Form.Item>
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
          <Form.Item >
            <Button
              className='form-button'
              type='primary'
              htmlType='submit'>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </FormBackground>
  );
}

export default Login;
