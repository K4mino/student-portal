import React from 'react';
import styled from 'styled-components';

import { Text } from '../atoms';

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    & img {
        max-width:200px;
    }
`;

const CardInfo = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  padding:24px;
  gap:10px;
`;

const Title = styled(Text)`
  font-size:0.8rem;
  text-align:center;
  font-weight:600;
  width:90%;
`;

const Button = styled.a`
width:50%;
border-radius:24px;
background-color:#2E5BF0;
padding:10px;
display:block;
color:#fff;
text-decoration:none;
text-align:center;
border:1px solid #2e5BF0;

&:hover {
  background-color:#fff;
  color:#2E5BF0;
}
`;

const TechnologyCard = ({title,link,imgLink}) => {
  return (
    <Wrapper>
      <img src={imgLink}/>
      <CardInfo>
        <Title>{title}</Title>
        <Button href={link}>Подробнее</Button>
      </CardInfo>
    </Wrapper>
  );
};

export default TechnologyCard;