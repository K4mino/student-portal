import React from 'react';
import styled from 'styled-components';

import{ Text } from './Text';

const Title = styled(Text)`
    font-size:1.6rem;
    font-weight:600;
    color:#000000;
`;

function PageTitle({pageTitle}) {
  return (
    <Title>
      {pageTitle}
    </Title>
  );
}

export default PageTitle;