import React, { useState,useEffect } from 'react';
import {BsXLg} from 'react-icons/bs';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { getDoc,doc } from 'firebase/firestore';
import { db } from '../../firebase';

import logo from '../../images/sidebarlogo.png';
import Img from '../atoms/Img';
import {Text,Box} from '../atoms';
import colors from '../constants/colors';
import navigation from '../utils/nav';
import { teacherNavigation } from '../utils/nav';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const StyledLink = styled(NavLink)`
    display:flex;
    justify-content:space-between;
    cursor:pointer;
    flex-direction:row;
    gap:1.2rem;
    border-radius:22px;
    text-decoration:none;
    background-color:none;
    color:#000000;
    padding:15px 10px;

	&.active{
		background-color:${colors.activeClass};
    color:#fff;
		
		& *{
            color:#fff;
        }
	}

    &:hover {
        background-color:${colors.activeClass};
        color:#fff;

        & *{
            color:#fff;
        }
    }
`;

const Nav = styled(Box)`
    background-color:#EDEEF2;
	  position:fixed;
	  min-height:100vh;
    min-width:170px;
	  max-width:12vw;
	  z-index:5;
    gap:1rem;
    justify-content:flex-start;
	  align-items:flex-start;
    transition:transform .1s ease-in-out;
`;

const BurgerMenu = styled(Box)`
    display:none;
    gap:1px;
    position:absolute;
	  padding:0;
    top:5px;
    left:5px;
    z-index:99;

	@media(max-width:770px){
		&{
      ${({isMobileMenuActive}) => isMobileMenuActive ? 'display:block;' : 'display:none;'}
		}
	}
`;

const Bar = styled.span`
    display:block;
    height:5px;
    width:35px;
    border-radius:10px;
    background-color:#333;
    margin:3px;
`;

function SideBar() {
  const [isMobileMenuActive,setIsMobileMenuActive] = useState(false);
  const {currentUser} = useContext(AuthContext);
  const [role, setRole] = useState('');
  useEffect(() => {
    const getData = async() => {
      try {
        const res = await getDoc(doc(db,'users',currentUser.uid));
        const userData = await res.data();
        setRole(userData.role);
      } catch (error) {
        console.log(error);
      }
    };
    currentUser.uid && getData();
  },[currentUser.uid]);
  return (
    <>
      <BurgerMenu
        isMobileMenuActive={isMobileMenuActive}
        onClick={() => setIsMobileMenuActive(!isMobileMenuActive)}>
        <Bar/>
        <Bar/>
        <Bar/>
      </BurgerMenu>
      <Nav className={`sidebar ${isMobileMenuActive ? 'active':''}`}>
        <BsXLg
          className='closeTabBtn'
          onClick={() => setIsMobileMenuActive(!isMobileMenuActive)}
          fontSize='1.3rem'/>
        <Img margin='10px 0 90px'
          src={logo}
          alt='logo' />
        {
          role == 'student' &&
          <>
            {
              navigation.map((nav,) => {
                const Icon = nav.icon; 
                return (
                  <StyledLink 
                    key={nav.icon}
                    to={nav.path}>
                    <Icon color={nav.color}/>
                    <Text fontSize='0.8rem'>{nav.label}</Text>
                  </StyledLink>
                );
              })
            }
          </>
        }
        {
          role == 'teacher' &&
          <>
            {
              teacherNavigation.map((nav,) => {
                const Icon = nav.icon; 
                return (
                  <StyledLink 
                    key={nav.icon}
                    to={nav.path}>
                    <Icon color={nav.color}/>
                    <Text fontSize='0.8rem'>{nav.label}</Text>
                  </StyledLink>
                );
              })
            }
          </>
        }
      </Nav>
    </>
  );
}

export {SideBar};