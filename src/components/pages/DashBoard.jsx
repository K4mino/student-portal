import React from 'react';
import styled from 'styled-components';
import { Select	} from 'antd';

import PageTitle from '../atoms/PageTitle';
import spacings from '../constants/spacings';
import Searchbar from '../organisms/Searchbar';
import colors from '../constants/colors';
import vector from '../../images/Vector.png';
import activeVector from '../../images/activeVector.png';
//import { weekDays } from '../utils/calendar';
import SideBar from '../organisms/SideBar';
//import { StyledText } from '../atoms/Text';
import CustomCalendar from '../organisms/CustomCalendar';


const Wrapper = styled.div`
	display:flex;
	width:100vw;
	height:max-content;
	overflow:auto;
`;

const Header = styled.div`
	display:flex;
	justify-content:space-between;
	width:70vw;
	height:15%;
	padding:${spacings.large} ${spacings.large} 0;
`;

const Content = styled.div`
	display:flex;
	flex-direction:column;
	margin-bottom:5%;
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
		right:-30px;
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

/* const Week = styled.div`
	display:flex;
	width:80vw;
	background-color:#F9FBFC;
	padding:${spacings.small};
	border-radius:16px;
	overflow:hidden;
`;

const WeekDay = styled(StyledText)`
	color:#000;
	font-size:0.9rem;
	text-align:center;
	width:17%;
`; */

const DashBoard = () => {
	const [currentDate,setCurrentDate] = React.useState(new Date());

	return (
		<Wrapper>
			<SideBar className='sidebar'/>
			<Content className='content'>
				<Header className='dashboard__header'>
					<PageTitle>Расписание</PageTitle>
					<Searchbar></Searchbar>
				</Header>
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
					<Select
						size='large'
						defaultValue='2023'
						style={{ width: '20%' }}
						options={[
							{ value: '2022', label: '2022' },
							{ value:'2023', label:'2023'}
						]}
					/>
				</DateHeader>
				{/* 
				<Week>
					{weekDays.map((day) => (
						<WeekDay key={day.label}>{day.label}</WeekDay>
					))}
				</Week>
				<CalendarDays>
					{currentMonthDays.map((day) => (
						<Day key={day.date}>{day.dayOfMonth}</Day>
					))}
				</CalendarDays> */}
				<CustomCalendar
					nexDate={setCurrentDate}
					value={currentDate} />
			</Content>
		</Wrapper>
	);
};

export default DashBoard;
