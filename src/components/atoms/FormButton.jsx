import styled from 'styled-components';
import React from 'react';

import { Button  as AntdButton} from 'antd';
import spacings from '../constants/spacings';

const StyledButton = styled(AntdButton)`
  margin:0 0 24px;
  background-color:#5BAFFC;
  width:100%;
  border-radius:8px;
  font-family:Inter;
  color:#fff;
  font-size:1rem;
  font-weight:600;

  &.ant-btn{
		height:auto;
		padding:${spacings.medium};
	}

  &:hover {
	background-color:#2E5BF0;
  }
`;

const FormButton = (props) => {
  const {className,buttonText,htmlType} = props;
  return (
    <StyledButton
      htmlType={htmlType}
      className={className}>
      {buttonText}
    </StyledButton>
  );
};

export {FormButton};