
import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

import spacings from '../constants/spacings';

const StyledButton = styled(Button)`
  outline: none;
  border: none;
  cursor:pointer;
  height:auto;

  padding: ${spacings.medium};

  ${({backgroundColor}) => backgroundColor && `background-color:${backgroundColor}`};
  ${({ width }) => width && `width:${width}`};
  ${({ borderRadius }) => borderRadius && `border-radius:${borderRadius}`};
  ${({ margin }) => margin && `margin:${margin}`};
`;
function MyButton(props) {
  const {htmlType,onClick,margin,borderRadius,width,className,backgroundColor,children,...rest} = props;
  return (
    <StyledButton
      className={className}
      htmlType={htmlType}
      size='large'
      height='60px'
      onClick={onClick}
      margin={margin}
      borderRadius={borderRadius}
      width={width}
      backgroundColor={backgroundColor}
      rest={rest}>
      {children}
    </StyledButton>
  );
}

export {MyButton};
