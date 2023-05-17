import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:{},
  chats:[],
  isChatOpen:false
};

export const chatSlice = createSlice({
  name:'chat',
  initialState,
  reducers:{
    setUser:(state,action) => {
      state.user = {...state.user,user:action.payload};
    },
    getChats:(state,action) => {
      state.chats = [...state.chats,action.payload];
    },
    toggleChat:(state) => {
      state.isChatOpen = !state.isChatOpen;
    }
  }
});

export const {setUser,getChats,toggleChat} = chatSlice.actions;

export default chatSlice.reducer;