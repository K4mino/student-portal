import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import FormInput from '../atoms/FormInput';
import {Box,Text} from '../atoms';
import waveRight from '../../images/waveRight.png';
import waveLeft from '../../images/waveLeft.png';
import colors from '../constants/colors';
import {StyledLink, FormButton,ButtonText} from './Login';

/*
    1.Импорты библиотек
    2.абсолютные файлы
    3.относительные файлы
*/

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow:hidden;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url(${waveRight});
    z-index: -1;
    background-position: bottom;
    background-repeat: no-repeat;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${waveLeft});
    background-position: bottom;
    background-repeat: no-repeat;
    background-image: 100%;
    z-index: -1;
  }

  @media (max-width: 660px) {
    &:after,
    &:before {
      background-size: 200%;
    }
  }
`;

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
    <Wrapper>
      <Box backgroundColor={colors.formBg}
        margin='0 20px'
        width='24rem'
        borderRadius='30px'>
        <Box width='95%'
          flexDirection	='row'
          justifyContent='space-between'
          alignItems='center'>
          <RegistrationTitle>
            Регистрация
          </RegistrationTitle>
          <StyledLink width='auto'
            onClick={() => navigate('/')}>
            Есть аккаунт? Войти
          </StyledLink>
        </Box>
        <FormInput placeholder='Ваш Email'
          width='100%' />
        <FormInput placeholder='Ваш пароль'
          width='100%' />
        <FormInput placeholder='Ваш телефон'
          width='100%' />
        <FormButton>
          <ButtonText>
            Продолжить
          </ButtonText>
        </FormButton>
        <InfoText>
          Нажимая кнопку “Продолжить”, Вы принимаете условия Публичной оферты
        </InfoText>
      </Box>
    </Wrapper>
  );
}

export default Registration;
