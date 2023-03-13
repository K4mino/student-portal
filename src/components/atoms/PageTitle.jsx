import React from 'react';
import styled from 'styled-components';

import{ Text } from './Text';

const Title = styled(Text)`
    font-size:1.6rem;
    font-weight:600;
    color:#000000;
`;

function PageTitle({pageTitle,className}) {
  return (
    <Title
      className={className}>
      {pageTitle}
    </Title>
  );
}

export  {PageTitle};