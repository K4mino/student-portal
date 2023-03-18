import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {Input,Button} from 'antd';

import {Box,Text,FormWrapper,FormLink, FormBackground} from '../atoms';

const InfoText = styled(Text)`
  text-align:center;
  width:80%;
  font-family:Inter;
  font-size:0.8rem;
  color:#fff;
  font-weight:400;
`;

const RegistrationTitle = styled(Text)`
  width:auto;
  font-family:Inter;
  color:#fff;
  font-size:1.3rem;
  font-weight:600;

`;


function Registration() {
  const navigate = useNavigate();

  return (
    <FormBackground>
      <FormWrapper>
        <Box width='95%'
          flexDirection	='row'
          justifyContent='space-between'
          alignItems='center'>
          <RegistrationTitle>
            Регистрация
          </RegistrationTitle>
          <FormLink width='auto'
            onClick={() => navigate('/')}>
            Есть аккаунт? Войти
          </FormLink>
        </Box>
        <Input placeholder='Ваш Email'
          className='form-input'/>
        <Input placeholder='Ваш пароль'
          className='form-input'/>
        <Input placeholder='Ваш телефон'
          className='form-input'/>
        <Button
          type='primary'
          className='form-button'>
            Продолжить
        </Button>
        <InfoText>
          Нажимая кнопку “Продолжить”, Вы принимаете условия Публичной оферты
        </InfoText>
      </FormWrapper>
    </FormBackground>
  );
}

export default Registration;
