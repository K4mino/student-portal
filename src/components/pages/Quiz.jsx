import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';

import QuestionList from '../organisms/QuestionList';
import Question from '../organisms/Question';
import Layout from '../Layout';
import { closeModal } from '../reducers/quiz';
import { selectShowResult,selectCorrectAnswers, selectQuestionsLength } from '../selectors/quizSelector';

const Wrapper = styled.div`
    display:grid;
    width:100%;
    grid-template-columns:345px auto;
    column-gap:3rem;
`;

const Quiz = () => {
  const result = useSelector(selectCorrectAnswers);
  const questionsLength = useSelector(selectQuestionsLength);
  const showResult = useSelector(selectShowResult);
  const dispatch = useDispatch();

  return (
    <Layout pageTitle='Тестирование'>
      <Wrapper>
        <Modal
          title='Your result'
          open={showResult}
          cancelButtonProps={{disabled:true}}
          footer={[
            <Button 
              key='ok'
              type='primary'
              onClick={()=> dispatch(closeModal())}>OK</Button>
          ]}
          onCancel={()=> dispatch(closeModal())}>
          {result.length}/{questionsLength}
        </Modal>
        <QuestionList/>
        <Question/>
      </Wrapper>
    </Layout>
  );
};

export default Quiz;