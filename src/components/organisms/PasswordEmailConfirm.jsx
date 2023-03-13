import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FormWrapper, FormTitle ,FormButton,FormButtonText,FormSubTitle} from '../atoms';

function PasswordEmailConfirm() {
  const navigate = useNavigate();

  return (
    <FormWrapper>
      <FormTitle>
            Письмо отправлено
      </FormTitle>
      <FormSubTitle>
            Перейдите по ссылке в письме для восстановления пароля
      </FormSubTitle>
      <FormButton
        onClick={() => navigate('/')}>
        <FormButtonText>
              На главную
        </FormButtonText>
      </FormButton>
    </FormWrapper>
  );
}

export {PasswordEmailConfirm};