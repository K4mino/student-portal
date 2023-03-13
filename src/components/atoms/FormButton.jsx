import styled from 'styled-components';
import React from 'react';

import {MyButton} from './MyButton';
import spacings from '../constants/spacings';

const StyledButton = styled(MyButton)`
  margin:0 0 24px;
  background-color:#5BAFFC;
  width:100%;
  border-radius:8px;

  &.ant-btn{
		height:auto;
		padding:${spacings.medium};
	}

  &:hover {
	background-color:#2E5BF0;
  }
`;

const FormButton = (props) => {
  const {className,children,onClick,htmlType,...rest} = props;
  <StyledButton
    onClick={onClick}
    htmlType={htmlType}
    className={className}
    rest={rest}>
    {children}
  </StyledButton>;
};

export {FormButton};