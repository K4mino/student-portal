import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import styled from 'styled-components';
import { Form,Input,Button } from 'antd';
//сделать barelling для атомов, организмов, и констант
import {Text,FormButton,FormTitle,FormWrapper,FormLink,FormBackground,FormInput, Box} from '../atoms';
//import { emailRegex, passwordRegex, isInputEmpty } from '../utils/index';

const InputWrapper = styled(Text)`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;

const StyledEyeIcon = styled(BsFillEyeFill)`
  position:absolute;
  right:5px;
  display:none;

  ${({showPassword}) => showPassword && 'display:block'};
`;

const StyledEyeHideIcon = styled(BsFillEyeSlashFill)`
  position:absolute;
  right:5px;
  display:block;

  ${({showPassword}) => showPassword && 'display:none'};
`;

const LinkWrapper = styled(Box)`
  width:100%;
  padding:20px 0px;
  justify-content:space-between;
  flex-direction:row;
`;

const IconWrapper = styled.div`
  font-size:1rem;
  position: absolute;
  right: 12px;
  top: 21px;

`;


function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = (values) => {
    //const { email, password } = form.getFieldsValue();
    console.log(values);

    navigate('/profile');
    
  };
  
  return (
    <FormBackground>
      <FormWrapper>
        <FormTitle>
            Вход
        </FormTitle>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={handleLogin}>
          <Form.Item 
            name='email'
            label='Email'
            noStyle
            rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input className='form-input'/>
          </Form.Item>
        {/*   <Form.Item 
            name='password'
            noStyle
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <FormInput
              placeholder='Ваш пароль'
            />
            <IconWrapper onClick={() => setShowPassword((prev) => !prev)}>
              <StyledEyeIcon showPassword={showPassword}
                className='show'/>
              <StyledEyeHideIcon showPassword={showPassword}
                className='hide'/>
            </IconWrapper> 
          </Form.Item> */}
          {/* <LinkWrapper>
            <FormLink
              textAlign='left'
              onClick={() => navigate('/passwordRecovery')}
            >
            Забыли пароль?
            </FormLink>
            <FormLink
              textAlign='right'
              onClick={() => navigate('/registration')}
            >
              Зарегестрироваться
            </FormLink>
          </LinkWrapper> */}
          <Form.Item 
            noStyle>
            <Button
              htmlType='submit'
              buttonText='Войти'
            />
          </Form.Item>
        </Form>
      </FormWrapper>
    </FormBackground>
  );
}

export default Login;
