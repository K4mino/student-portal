import React from 'react';
import styled from 'styled-components';
import { useSelector,useDispatch } from 'react-redux';

import spacings from '../constants/spacings';
import colors from '../constants/colors';
import { Box,Text } from '../atoms';
import { selectActiveQuestion,selectQuestions,selectAnsweredQuestion,  } from '../selectors/quizSelector';
import { answer } from '../reducers/quiz';

const Wrapper = styled.div`
    width:90%;
    height:100%;
    border-radius:11px;
    background-color:${colors.boxBackground.thirdColor};
    padding:${spacings.large};
    display:flex;
    flex-direction:column;
    gap:2rem;
    position:relative;
`;

const QuestionNumber = styled.div`
    position:absolute;
    top:0;
    left:-15px;
`;

const QuestionText = styled(Text)`
    font-weight:400;
    font-size:1rem;
    text-align:left;
    width:100%;
`;

const VariantsWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.5rem;
`;

const Variant = styled.div`
    width:70%;
    padding:10px;
    display:flex;
    gap:1rem;
    border-radius:25px;
    font-size:0.8rem;
    background-color:#fff;
    cursor:pointer;

    &:hover{
        color:#fff;
        background-color:${colors.activeClass};
    }

    ${({$isActive}) => $isActive ? `background-color:${colors.activeClass};`:'background-color:#fff;'}
    ${({$isActive}) => $isActive ? 'color:#fff;':'color:#000;'}
    ${({$isCorrect,$completed,$isActive}) => ($isActive && $completed) ? $isCorrect ? 'background-color:green;': 'background-color:red;' : ''}
`;
const ControlsWrapper = styled(Box)`
    position:absolute;
    bottom:0px;
    flex-direction:row;
    gap:1rem;
    left:50%;
    transform:translateX(-50%);
`;

const Controls = styled.div`

`;

const Question = () => {
  const activeQuestion = useSelector(selectActiveQuestion);
  const questions = useSelector(selectQuestions);
  const answers = useSelector(selectAnsweredQuestion);
  const completed = useSelector((state) => state.quiz.completed);
  const dispatch = useDispatch();

  const handleAnswer = ((index) => () => dispatch(answer(index)));

  return (
    <Wrapper>
      <Box
        padding='0'>
        <QuestionNumber>{activeQuestion + 1}</QuestionNumber>
        <QuestionText>
          {questions[activeQuestion].title}
        </QuestionText>
      </Box>
      <VariantsWrapper>
        {
          questions[activeQuestion].variants.map((variant,i) => {
            let selected = answers[activeQuestion] == i;
            return (
              <Variant 
                key={variant}
                $completed={completed}
                $isCorrect={answers[activeQuestion] == questions[activeQuestion].correct}
                $isActive={selected}
                onClick={handleAnswer(i)}>
                {variant}
              </Variant>
            );})
        }
      </VariantsWrapper>
      <ControlsWrapper>
        <Controls 
          prev={true}/>
        <Controls/>
      </ControlsWrapper>
    </Wrapper>
  );
};

export default Question;