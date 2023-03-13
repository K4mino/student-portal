import React from 'react';
import styled from 'styled-components';
import {BsBell,BsThreeDotsVertical} from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';
import spacings from '../constants/spacings';
import {Searchbar} from './Searchbar';
import {Box,Text,PageTitle} from '../atoms';
import profileImg from '../../images/profile.png';

const StyledHeader = styled.div`
	display:flex;
	justify-content:space-between;
	align-items:flex-start;	
	gap:1rem;
	width:80vw;
	padding:${spacings.large} ${spacings.large} 0;
`;

const Profile = styled.div`
	width:22%;
	display:flex;
	align-items:center;
	justify-content:space-between;
`;



function Header({pageTitle}) {

  const navigate = useNavigate();

  return (
    <StyledHeader className='dashboard__header'>
      <PageTitle pageTitle={pageTitle} />
      <Searchbar/>
      <Profile>
        <BsBell/>
        <Box padding='0'
          alignItems='flex-start'>
          <Text fontSize='0.8rem'
            fontWeight='500'
          >Name Surname</Text>
          <Text fontWeight='400'
            fontSize='0.7rem'
            color='#5C5B5B'
          >ID:27712</Text>
        </Box>
        <Box onClick={() => navigate('/profile')}
          padding='0'>
          <img src={profileImg}
            alt='profile.img' />
        </Box>
        <BsThreeDotsVertical/>	
      </Profile>
    </StyledHeader>
  );
}

export {Header};