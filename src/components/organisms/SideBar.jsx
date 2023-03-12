import React, { useState } from 'react';
import {BsXLg} from 'react-icons/bs';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import logo from '../../images/sidebarlogo.png';
import Img from '../atoms/Img';
import {Text,Box} from '../atoms';
import colors from '../constants/colors';
import navigation from '../utils/nav';


const NavLink = styled(Box)`
    display:flex;
    justify-content:space-between;
    cursor:pointer;
    flex-direction:row;
    gap:1rem;
    border-radius:22px;

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

	@media(max-width:770px){
		&{
			display:block;
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

  const navigate = useNavigate();
  const [isActivePage,setIsActivePage] = useState(null);
  const [isActive,setIsActive] = useState(false);
  const location = useLocation();
  
  return (
    // навигация через routes или через Link
    <>
      <BurgerMenu 
        onClick={() => setIsActive(!isActive)}>
        <Bar/>
        <Bar/>
        <Bar/>
      </BurgerMenu>
      <Nav className={`sidebar ${isActive ? 'active':''}`}>
        <BsXLg
          className='closeTabBtn'
          onClick={() => setIsActive(!isActive)}
          fontSize='1.3rem'/>
        <Img margin='10px 0 90px'
          src={logo}
          alt='logo' />
        {
          navigation.map((nav,i) => {
            const Icon = nav.icon; 
            return (
              <NavLink className={isActivePage === i + 1 ? 'active': ''}
                key={nav.icon}
                isActive={location === nav.path}
                onClick={() => {navigate(nav.path)}}
              >
                <Icon color={nav.color}/>
                <Text fontSize='0.8rem'>{nav.label}</Text>
              </NavLink>
            );
          })
        }
      </Nav>
    </>
  );
}

export default SideBar;