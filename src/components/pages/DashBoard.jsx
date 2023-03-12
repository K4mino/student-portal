import React from 'react';
import styled from 'styled-components';
import { Calendar} from 'antd';

import Layout from '../Layout';
import spacings from '../constants/spacings';
import colors from '../constants/colors';
import vector from '../../images/Vector.png';
import activeVector from '../../images/activeVector.png';
import DailyStatus from '../atoms/DailyStatus';


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

const CurrentDate = styled.div`
	color:#2E5BF0;
	font-size:1.1rem;
	font-weight:500;
`;

const DateSwitch = styled.div`
	width:48px;
	height:48px;
	background-color:#fff;
	box-shadow:1px 1px 4px 1.5px rgba(0,0,0,0.15);
	background-image:url(${vector});
	background-repeat:no-repeat;
	background-size:25%;
	background-position: center;
	border:1.5px solid #E9EDFE;

	${({borderRadius}) => borderRadius && `border-radius:${borderRadius}`};

	&.active{
		background-color:${colors.activeClass};
		background-image:url(${activeVector});
		border:1.5px solid #2E5BF0;
	}
`;

const DateSwitchers = styled.div`
	display:flex;
`;


function DashBoard() {
  return (
    <Layout pageTitle='Расписание'>
      <Content>
        <DateHeader className='date__header'>
          <DateInterface>
            <SubTitle>Задания</SubTitle>
            <CurrentDate>Март, 2023</CurrentDate>
            <DateSwitchers>
              <DateSwitch borderRadius='13px 0 0 13px'/>
              <DateSwitch
                className='active'
                borderRadius='0 13px 13px 0'/>
            </DateSwitchers>
          </DateInterface>
        </DateHeader>
        <Calendar 
          dateCellRender={(date) => <DailyStatus date={date}/>}/>
      </Content>
    </Layout>
		
  );
}

export default DashBoard;
