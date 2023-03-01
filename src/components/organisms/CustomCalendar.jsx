import React from 'react';
import styled from 'styled-components';
import {Calendar} from 'react-calendar';

const Wrapper = styled.div`

	.react-calendar__month-view__weekdays {
    	text-align: center;
		background-color:#F9FBFC;
		text-decoration:none !important;
		color:#000;
		padding: 12px;
  	}
	.react-calendar__month-view__weekdays__weekday abbr{
		text-decoration:none !important;
		font-size:1rem;
	}

	.react-calendar__navigation{
		width:40%;
		display:flex;
		align-items:center;
		margin:0;
		position:relative;
	}

	.react-calendar__navigation__arrow.react-calendar__navigation__next-button{
		width:48px;
		height:48px;
		background-color:#fff;
		box-shadow:1px 1px 4px 1.5px rgba(0,0,0,0.15);
		background-repeat:no-repeat;
		background-size:25%;
		background-position: center;
		border:1.5px solid #E9EDFE;
		border-radius:0 12px 12px 0;
		font-size:2rem;
		text-align:center;
		position:absolute;
		right:0;
	}

	.react-calendar__navigation__arrow.react-calendar__navigation__prev-button{
		width:48px;
		height:48px;
		background-color:#fff;
		box-shadow:1px 1px 4px 1.5px rgba(0,0,0,0.15);
		background-repeat:no-repeat;
		background-size:25%;
		background-position: center;
		border:1.5px solid #E9EDFE;
		border-radius:12px 0 0 12px;
		font-size:2rem;
		text-align:center;
		position:absolute;
		right:49px;
	}

	.react-calendar__navigation__label{
		background:transparent;
		outline:none;
		border:none;
		color:#2E5BF0;
		font-size:1.2rem;
	}

	.react-calendar__navigation__arrow.react-calendar__navigation__prev2-button,.react-calendar__navigation__arrow.react-calendar__navigation__next2-button{
		display:none;
	}

	button {
		background:transparent;
		outline:none;
		height:80px;
		border:1px solid #E6EEF1;
		text-align:left;
	}
`;
const CustomCalendar = ({nextDate,value}) => {

	return (
		<Wrapper>
			<Calendar value={value}
				onChange={nextDate}
				
			/>
		</Wrapper> 
	);
};

export default CustomCalendar;