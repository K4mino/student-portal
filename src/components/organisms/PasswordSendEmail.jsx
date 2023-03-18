import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Input,Button} from 'antd';

import { FormSubTitle,FormTitle,FormWrapper,FormLink } from '../atoms';

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
      <Input 
        placeholder='Ваш Email'
        className='form-input' />
      <Button
        type='primary'
        className='form-button'
        onClick={() => setIsEmailSent(true)}>
          Восстановить пароль
      </Button>
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