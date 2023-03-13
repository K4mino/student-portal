import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import {Box,Text,FormButton,FormButtonText,FormWrapper,FormLink, FormBackground,FormInput} from '../atoms';

/*
    1.Импорты библиотек
    2.абсолютные файлы
    3.относительные файлы
*/

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
        <FormInput placeholder='Ваш Email'
          width='100%' />
        <FormInput placeholder='Ваш пароль'
          width='100%' />
        <FormInput placeholder='Ваш телефон'
          width='100%' />
        <FormButton>
          <FormButtonText>
            Продолжить
          </FormButtonText>
        </FormButton>
        <InfoText>
          Нажимая кнопку “Продолжить”, Вы принимаете условия Публичной оферты
        </InfoText>
      </FormWrapper>
    </FormBackground>
  );
}

export default Registration;
