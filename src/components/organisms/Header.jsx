import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {BsBell,BsThreeDotsVertical} from 'react-icons/bs';
import { signOut } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import spacings from '../constants/spacings';
import {Searchbar} from './Searchbar';
import {Box,Text,PageTitle} from '../atoms';
import profileImg from '../../images/profile.png';
import { auth } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

const StyledHeader = styled.div`
	display:flex;
	justify-content:space-between;
	align-items:flex-start;	
  position:relative;
	gap:1rem;
	width:80vw;
	padding:${spacings.large} ${spacings.large} 0;

  @media(max-width:770px){
    &{
      width:90%;
    }
  }

  @media(max-width:660px){
    & {
      justify-content:center;
      padding-bottom:1rem;
    }
  }
`;

const Profile = styled.div`
	width:40%;
	display:flex;
	align-items:center;
	justify-content:space-between;
  max-width:300px;
  @media(max-width:770px){
    &{
      width:50%;
    }
  }

  @media(max-width:660px){
    &{
      display:none;
    }
  }
`;

const LogOut = styled.div`
  width:90px;
  height:25px;
  border-radius:7px;
  background-color:#fff;
  border:1px solid black;
  padding:5px;
  color:#333;
  position:absolute;
  right:50px;
  font-size:0.9rem;
  text-align:center;
  cursor:pointer;

  ${({isActive}) => isActive ? 'display:block':'display:none'};
`;

function Header({pageTitle,shouldShowSearch}) {
  const [isActive,setIsActive] = useState(false);
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <StyledHeader className='dashboard__header'>
      <PageTitle pageTitle={pageTitle} />
      <Searchbar shouldShowSearch={shouldShowSearch}/>
      <Profile>
        <BsBell size='20px'/>
        <Box padding='0'
          alignItems='flex-start'>
          <Text fontSize='0.8rem'
            fontWeight='500'>
            {currentUser.email}
          </Text>
          <Text fontWeight='400'
            fontSize='0.7rem'
            color='#5C5B5B'
          >ID:27712</Text>
        </Box>
        <Box onClick={() => navigate('/profile')}
          padding='0'>
          <img
            style={{width:'57px',height:'57px'}}
            src={profileImg}
            alt='profile.img' />
        </Box>
        <BsThreeDotsVertical
          onClick={() => setIsActive(!isActive)}/>
        <LogOut isActive={isActive}
          onClick={() => signOut(auth)}>
          Logout
        </LogOut>
      </Profile>
    </StyledHeader>
  );
}

export {Header};