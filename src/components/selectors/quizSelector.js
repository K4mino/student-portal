const _ = require('lodash');

export const selectQuestions = (state) => _.get(state, 'quiz.questions',[]);
export const selectActiveQuestion = (state) => _.get(state, 'quiz.activeQuestion',0);
export const selectAnsweredQuestion = (state) => _.get(state, 'quiz.answeredQuestions',{});
export const selectShowResult = (state) => _.get(state, 'quiz.showResult',false);
export const selectCorrectAnswers = (state) => _.get(state, 'quiz.correctAnswers',[]);
export const selectQuestionsLength = (state) => _.get(state, 'quiz.questionsLength',5);
