import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FormSubTitle,FormTitle,FormWrapper,FormButtonText,FormButton,FormLink,FormInput } from '../atoms';

function PasswordSendEmail({setIsEmailSent}) {
  const navigate = useNavigate();

  return (
    <FormWrapper>
      <FormTitle>
            Восстановить пароль
      </FormTitle>
      <FormSubTitle>
            На Ваш e-mail будет выслана ссылка для восстановления пароля
      </FormSubTitle>
      <FormInput placeholder='Ваш Email'
        width='100%' />
      <FormButton
        onClick={() => setIsEmailSent(true)}>
        <FormButtonText>
              Восстановить пароль
        </FormButtonText>
      </FormButton>
      <FormLink
        onClick={() => navigate('/')}
        textAlign='right'
        width='95%'>
            Вернуться на страницу входа
      </FormLink>
    </FormWrapper>
  );
}

export {PasswordSendEmail};