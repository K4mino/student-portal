import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import spacings from '../constants/spacings';
import colors from '../constants/colors';
import { Text } from '../atoms';
import { selectQuestions,selectActiveQuestion } from '../selectors/quizSelector';
import { openQuestion,getResult } from '../reducers/quiz';

const Wrapper = styled.div`
    width:100%;
    position:relative;
    height:min-content;
    border-radius:11px;
    padding:${spacings.medium};
    background-color:${colors.boxBackground.thirdColor};
    display:grid;
    gap:1rem;
    grid-template-columns:14% 14% 14% 14% 14%;
`;

const QuestionIndexes = styled.div`
    background-color:transparent;
    border:2px solid #AFCAD6;
    text-align:center;
    cursor:pointer;
    border-radius:7px;
    display:flex;
    align-items:center;
    justify-content:center;
    height:39px;

    ${({$isActive}) => $isActive ? `background-color:${colors.activeClass}` :'background-color:transparent;'}
`;

const QuestionIndex = styled(Text)`
    font-weight:500;
    font-size:0.9rem;

    ${({$isActive}) => $isActive ? 'color:#fff':'color:#AFCAD6;'}
`;

const CompleteButton = styled.div`
    bottom:20px;
    width:100%;
    border-radius:11px;
    background-color:transparent;
    border:2px solid #AFCAD6;
    color:#AFCAD6;
    grid-column-end:span 5;
    text-align:center;
    padding:10px 0;
    cursor:pointer;

    &:hover{
        background-color:${colors.activeClass};
        color:#fff;
    }
`;

const QuestionList = () => {
  const questions = useSelector(selectQuestions);
  const activeQuestion = useSelector(selectActiveQuestion);
  const dispatch = useDispatch();
  const handleOpenQuestion = ( (i) => () => dispatch(openQuestion(i)));
  return (
    <Wrapper>
      {questions.map((_,i) => (
        <QuestionIndexes 
          key={i}
          $isActive={activeQuestion == i}
          onClick={handleOpenQuestion(i)}>
          <QuestionIndex
            $isActive={activeQuestion == i}>
            {i + 1}
          </QuestionIndex>
        </QuestionIndexes>
      ))}
      <CompleteButton onClick={() => dispatch(getResult())}>Complete</CompleteButton>
    </Wrapper>
  );
};

export default QuestionList;