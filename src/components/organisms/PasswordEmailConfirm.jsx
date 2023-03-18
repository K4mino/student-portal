import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import { FormWrapper, FormTitle ,FormSubTitle} from '../atoms';

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
      <Button
        type='primary'
        className='form-button'
        onClick={() => navigate('/')}>
          На главную
      </Button>
    </FormWrapper>
  );
}

export {PasswordEmailConfirm};