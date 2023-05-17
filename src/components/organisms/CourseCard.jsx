import React from 'react';
import styled from 'styled-components';
import { Text } from '../atoms';

const Wrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  align-items:center;

  & img{
    width:100%;
    max-height:180px;
    object-fit: cover;
    object-position: center;
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
  text-align:left;
  width:90%;
`;

const SubTitle = styled(Text)`
  font-size:0.7rem;
  color: rgb(102, 102, 102);
  text-align:left;
  width:90%;
`;

const Enroll = styled.a`
width:90%;
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

const CourseCard = ({imgLink,title,subtitle,link}) => {
  return (
    <Wrapper>
      <img src={imgLink}/>
      <CardInfo>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Enroll href={link}
          target='_blank'>Enroll</Enroll>
      </CardInfo>
    </Wrapper>
  );
};

export default CourseCard;