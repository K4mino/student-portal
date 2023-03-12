import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import FormInput from '../atoms/FormInput';
import { Text } from '../atoms';
import { Title,FormWrapper,ButtonText,StyledLink,FormButton } from '../pages/Login';


export const Subtitle = styled(Text)`
  text-align:left;
  width:95%;
  font-family:Inter;
  font-size:0.8rem;
  color:#fff;
  font-weight:400;
  margin:0px 0px 24px;
`;

function PasswordSendEmail({setIsEmailSent}) {
  const navigate = useNavigate();

  return (
    <FormWrapper>
      <Title>
            Восстановить пароль
      </Title>
      <Subtitle>
            На Ваш e-mail будет выслана ссылка для восстановления пароля
      </Subtitle>
      <FormInput placeholder='Ваш Email'
        width='100%' />
      <FormButton
        onClick={() => setIsEmailSent(true)}>
        <ButtonText>
              Восстановить пароль
        </ButtonText>
      </FormButton>
      <StyledLink
        onClick={() => navigate('/')}
        textAlign='right'
        width='95%'>
            Вернуться на страницу входа
      </StyledLink>
    </FormWrapper>
  );
}

export default PasswordSendEmail;