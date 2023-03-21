import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      title:'What is the React?',
      variants:['Library','Framework','Language','Book'],
      correct:0,
    },
    {
      title:'What is not a framework?',
      variants:['JS','Vue','Angular','React'],
      correct:0
    },
    {
      title:'What is the JS?',
      variants:['Library','Framework','Language','Book'],
      correct:2
    },
    {
      title:'What is the useState?',
      variants:['Library','Framework','Language','Hook'],
      correct:3
    },
    {
      title:'Lorems ipas amads?',
      variants:['Library','Framework','Language','Hook'],
      correct:3
    },
  ],
  activeQuestion:0,
  correctAnswers:[],
  answeredQuestions:{},
  questionsLength:5,
  showResult:false,
  completed:false
};

export const quizSlice = createSlice({
  name:'quiz',
  initialState,
  reducers:{
    openQuestion:(state,action) => {
      state.activeQuestion = action.payload;
    },
    answer:(state,action) => {
      state.answeredQuestions[state.activeQuestion] = action.payload;
    },
    getResult:(state) => {
      for(let key in state.answeredQuestions){
        if(state.correctAnswers.indexOf(state.questions[key]) == -1 && state.completed == false){
          if(state.questions[key].correct == state.answeredQuestions[key]){
            state.correctAnswers.push(state.questions[key]);
          }
        }
      }
      state.showResult = true;
      state.completed = true;
    },
    closeModal:(state) => {
      state.showResult = false;
    },
    previousQuestion:(state) => {
      if(state.activeQuestion - 1 < 1){
        return;
      }
      state.activeQuestion = state.activeQuestion -1;
    },
    nextQuestion:(state) => {
      if(state.activeQuestion + 1 > state.questions.length){
        return;
      }
      state.activeQuestion = state.activeQuestion + 1;
    }
  }
});

export const {openQuestion,answer,getResult,previousQuestion,nextQuestion,closeModal} = quizSlice.actions;

export default quizSlice.reducer;