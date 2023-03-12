import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FormWrapper, Title ,FormButton,ButtonText} from '../pages/Login';
import { Subtitle } from './PasswordSendEmail';


function PasswordEmailConfirm() {
  const navigate = useNavigate();

  return (
    <FormWrapper>
      <Title>
            Письмо отправлено
      </Title>
      <Subtitle>
            Перейдите по ссылке в письме для восстановления пароля
      </Subtitle>
      <FormButton
        onClick={() => navigate('/')}>
        <ButtonText>
              На главную
        </ButtonText>
      </FormButton>
    </FormWrapper>
  );
}

export default PasswordEmailConfirm;