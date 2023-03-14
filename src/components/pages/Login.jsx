import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Form,Input,Button } from 'antd';
import {FormTitle,FormWrapper,FormLink,FormBackground, Box} from '../atoms';

const LinkWrapper = styled(Box)`
  width:100%;
  padding:20px 0px;
  justify-content:space-between;
  flex-direction:row;
`;

function Login() {
  const navigate = useNavigate();

  const handleLogin = (values) => {
    //const { email, password } = form.getFieldsValue();
    console.log(values);

    navigate('/profile');
    
  };
  
  return (
    <FormBackground>
      <FormWrapper>
        <FormTitle>
            Вход
        </FormTitle>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          autoComplete='off'
          onFinish={handleLogin}>
          <Form.Item
            name='username'
            className='email-error'
            rules={[{ required: true, message: 'Пожалуйста введите ваш email!' }]}
          >
            <Input 
              placeholder='Введите ваш email'
              className='form-input'
            />
          </Form.Item>
          <Form.Item
            name='password'
            className='password-error'
            rules={[{ required: true, message: 'Пожалуйста введите ваш пароль!' }]}
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
