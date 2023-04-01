import React from 'react';
import styled from 'styled-components';
import { Calendar} from 'antd';

import Layout from '../Layout';
import spacings from '../constants/spacings';
import {DailyStatus} from '../atoms';

const Content = styled.div`
	display:flex;
	flex-direction:column;
	margin-bottom:5%;
	width:99%;
`;

const DateHeader = styled.div`
	display:flex;
	align-items:center;
	width:70vw;
	justify-content:space-between;
	padding:${spacings.small} ${spacings.large};
`;

const DateInterface = styled.div`
	display:flex;
	width:40%;
	min-width:400px;
	align-items:center;
	justify-content:space-between;
`;

const SubTitle = styled.div`
	font-family:1.1rem;
	color:#000;
	font-weight:500;
	position:relative;

	&:after{
		content:'';
		display:block;
		background-color:#A6A6A6;
		height:100%;
		width:2px;
		position:absolute;
		right:-35%;
		top:0;
	}
`;
function DashBoard() {
  return (
    <Layout pageTitle='Расписание'>
      <Content>
        <DateHeader className='date__header'>
          <DateInterface>
            <SubTitle>Задания</SubTitle>
          </DateInterface>
        </DateHeader>
        <Calendar 
          dateCellRender={(date) => <DailyStatus date={date}/>}/>
      </Content>
    </Layout>
		
  );
}

export default DashBoard;
