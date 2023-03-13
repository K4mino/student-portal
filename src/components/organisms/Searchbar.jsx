import React from 'react';
import styled from 'styled-components';

import { Input } from 'antd';
import lupa from '../../images/lupa.png';
// import spacings from '../constants/spacings';

const SearchInput = styled(Input)`
    font-size:1rem;
    font-family:Montserrat;
    box-shadow:1px 1px 4px 1.5px rgba(0,0,0,0.15) !important;
    width:100%;
    margin:0 !important;
    padding:10px;
    line-height:10px;
    position:relative;
`;

const Icon = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#2E5BF0;
    width:32px;
    height:32px;
    border-radius:9px;
    position:absolute;
    right:5px;    
    top:6px;
    background-image:url(${lupa});
    background-repeat:no-repeat;
    background-position:center;
`;

const Wrapper = styled.div`
    position:relative;
    margin-bottom:1.5rem;
    width:40%;
`;

function Searchbar() {
  return (
    <Wrapper>
      <SearchInput size='large'
        placeholder='Поиск'/>
      <Icon/>
    </Wrapper>
  );
}

export {Searchbar};