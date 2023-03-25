import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {Input,Button,Form} from 'antd';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import {doc,setDoc} from 'firebase/firestore';
import {auth,db} from '../../firebase';

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
  const [form] = Form.useForm();

  const handleRegistration = async () => {
    const {email,password} = form.getFieldsValue();
    console.log(email);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      try {
        await setDoc(doc(db,'users',res.user.uid),{
          uid:res.user.uid,
          email:res.user.email,
        });
        await setDoc(doc(db,'userChats',res.user.uid),{
          
        });
        navigate('/profile');
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  }; 

  return (
    <FormBackground>
      <FormWrapper>
        <Form
          form={form}
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
            name='email'
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
