import React from 'react';

import {Text} from './Text';

function Link(props) {
  const { onClick,color,fontWeight,fontSize,width,textAlign,children} = props;

  return (
    <Text
      textDecoration='underline'
      cursor='pointer'
      onClick={onClick}
      width={width}
      fontFamily='Inter'
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      textAlign={textAlign}
      props
    >
      {children}
    </Text>
  );
}

export default Link;
