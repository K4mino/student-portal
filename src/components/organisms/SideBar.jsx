import React, { useState } from 'react';
import { BsPersonCircle ,BsHddStack,BsCalendar,BsJournals,BsBook,BsChatLeft,BsXLg} from 'react-icons/bs';
import styled from 'styled-components';

import logo from '../../images/sidebarlogo.png';
import Img from '../atoms/Img';
import Text from '../atoms/Text';
import colors from '../constants/colors';
import { StyledBox } from '../atoms/Box';

const NavLink = styled(StyledBox)`
    display:flex;
    justify-content:space-between;
    cursor:pointer;
    flex-direction:row;
    gap:1rem;
    border-radius:22px;
    &:hover {
        background-color:${colors.activeClass};
        color:#fff;

        & *{
            color:#fff;
        }
    }
`;

const Nav = styled(StyledBox)`
    background-color:${colors.side};
    height:100vh;
    width:15vw;
    min-width:190px;
    align-items:flex-start;
    transition:transform .1s ease-in-out;

    @media(max-width:770px){
        transform:translateX(-100%);

        &.active{
            transform:translateX(0);
        }
    }
`;

const BurgerMenu = styled(StyledBox)`
    display:none;
    gap:1px;
    position:absolute;
    top:0px;
    left:0px;

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
//@Todo navlink через map
console.log(window.innerWidth);
const SideBar = () => {
	const [isActive,setIsActive] = useState(false);
	return (
		<>
			<BurgerMenu onClick={() => setIsActive(!isActive)}>
				<Bar/>
				<Bar/>
				<Bar/>
			</BurgerMenu>
			<Nav className={isActive ? 'active':''}>
				<BsXLg
					display={window.innerWidth < 770 ? 'block':'none'}
					onClick={() => setIsActive(!isActive)}
					fontSize='1.3rem'/>
				<Img margin='10px 0 90px'
					src={logo}
					alt='logo' />
				<NavLink>
					<BsPersonCircle color='#2E5BF0'/>
					<Text fontSize='0.9rem'>Профиль</Text>
				</NavLink>
				<NavLink>
					<BsHddStack color='#2E5BF0'/>
					<Text fontSize='0.9rem'>Новости</Text>
				</NavLink>
				<NavLink>
					<BsCalendar color='#2E5BF0'/>   
					<Text fontSize='0.9rem'>Расписание</Text>
				</NavLink>
				<NavLink>
					<BsJournals color='#2E5BF0'
						width='20%'/>   
					<Text fontSize='0.9rem'>Дисциплины</Text>
				</NavLink>
				<NavLink>
					<BsBook color='#2E5BF0'/>   
					<Text fontSize='0.9rem'>Журнал</Text>
				</NavLink>
				<NavLink>
					<BsChatLeft color='#2E5BF0'/>   
					<Text fontSize='0.9rem'>Чаты</Text>
				</NavLink>
			</Nav>
		</>
	);
};

export default SideBar;