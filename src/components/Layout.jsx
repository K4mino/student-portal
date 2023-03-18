import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import {Box} from './atoms';
import {Header,RightBar,SideBar} from './organisms';

const Wrapper = styled.div`
	display:flex;
	justify-content:space-between;
	height:100vh;
`;

const Content = styled.div`
	display:flex;
	width:85vw;
	flex-direction:column;

	@media(max-width:770px){
		&{
			width:100vw;
		}
	}
`;

const Main = styled.div`
	display:flex;
	position:relative;
	padding:0 15px;
`;

const SideBarWrapper = styled.div`
	min-width:12vw;
	max-width:12vw;

	@media(max-width:770px){
		&{
			width:0vw;
			min-width:0vw;
		}
	}
`;

function Layout({children,pageTitle}) {
  const isOpen = useSelector((state) => state.rightBar.isOpen);

  return (
    <Wrapper>
      <SideBarWrapper className='sidebar__wrapper'>
        <SideBar/>
      </SideBarWrapper>
      <Content className='layout__content'>
        <Header pageTitle={pageTitle}/>
        <Main>
          <Box width={isOpen ? '69%' : '95%'}
            className='dynamic__content'>
            {children}
          </Box>
          <RightBar/>
        </Main>
      </Content>
    </Wrapper>
  );
}

export default Layout;