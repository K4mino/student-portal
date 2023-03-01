import React from 'react';
import styled from 'styled-components';

import {StyledInput} from '../atoms/Input';
//import spacings from '../constants/spacings';

const SearchInput = styled(StyledInput)`
    font-size:1rem;
    padding:0 10px;
    font-family:Montserrat;
    box-shadow:1px 1px 4px 1.5px rgba(0,0,0,0.15);
    width:40%;
    margin:0;
    height:63px;
    line-height:10px;
`;

const Searchbar = () => {
	return (
		<SearchInput placeholder='Поиск'/>
	);
};

export default Searchbar;