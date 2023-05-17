import React from 'react';
import styled from 'styled-components';

import {Box} from './atoms';
import {Header,RightBar,SideBar} from './organisms';

const Wrapper = styled.div`
	display:flex;
	justify-content:space-between;
	height:100vh;
	overflow-x:hidden;
`;

const Content = styled.div`
	display:flex;
	width:85vw;
	flex-direction:column;
	overflow-x:hidden;
	
	@media(max-width:770px){
		&{
			width:100%;
		}
	}
`;

const Main = styled.div`
	display:flex;
	position:relative;
	padding:0 15px;

	@media(max-width:770px){
		&{	
			width:100%;
			padding:0;
			justify-content:center;
		}
	}
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

function Layout({children,pageTitle,shouldShowSearch}) {

  return (
    <Wrapper>
      <SideBarWrapper className='sidebar__wrapper'>
        <SideBar/>
      </SideBarWrapper>
      <Content className='layout__content'>
        <Header pageTitle={pageTitle}
          shouldShowSearch={shouldShowSearch}/>
        <Main>
          <Box width='95%'
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