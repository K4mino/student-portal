
import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

import spacings from '../constants/spacings';

export const StyledButton = styled(Button)`
  outline: none;
  border: none;
  cursor:pointer;
  height:auto;

  padding: ${spacings.medium};

  ${({backgroundColor}) => backgroundColor && `background-color:${backgroundColor}`};
  ${({ width }) => width && `width:${width}`};
  ${({ borderRadius }) => borderRadius && `border-radius:${borderRadius}`};
  ${({ margin }) => margin && `margin:${margin}`};

	&.ant-btn{
		height:auto;
		padding:${spacings.medium};
	}

  &:hover {
	background-color:#2E5BF0;
  }
`;
function MyButton(props) {
  const {htmlType,onClick,margin,borderRadius,width,backgroundColor,children} = props
  return (
    <StyledButton
      htmlType={htmlType}
      size='large'
      height='60px'
      onClick={onClick}
      margin={margin}
      borderRadius={borderRadius}
      width={width}
      backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  );
}

export default MyButton;
