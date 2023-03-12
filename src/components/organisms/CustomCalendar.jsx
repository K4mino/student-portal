import React from 'react';
import styled from 'styled-components';
import {Calendar} from  'antd';

import DailyStatus from '../atoms/DailyStatus';

const Wrapper = styled.div`
	width:80vw;
`;

function CustomCalendar() {

  return (
    <Wrapper>
      <Calendar
        monthCellRender={(date) => date.$M }
        onPanelChange={(date) => console.log(date)}
        dateCellRender={(date) => <DailyStatus date={date}/>}
      />
    </Wrapper> 
  );
}

export default CustomCalendar;