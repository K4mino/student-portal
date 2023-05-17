import React from 'react';
import styled from 'styled-components';

import defaultCover from '../../images/defaultCover.jpg';
import { Text } from '../atoms';

const Wrapper = styled.div`
    border-radius:16px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    & img{
      width:100%;
      height:200px;
    }
`;

const Title = styled(Text)`
    font-weight:600;
    font-size:0.8rem;
`;

const Preview = styled.a`
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

const Book = ({title,imgLink,previewLink}) => {
  return (
    <Wrapper>
      <img src={imgLink ? imgLink : defaultCover}/>
      <Title>{title}</Title>
      <Preview href={previewLink}
        target='_blank'>Подробнее</Preview>
    </Wrapper>
  );
};

export  {Book};