const AuthReducer = (state,action) => {
  switch(action.type){
  case 'SET_ROLE':{
    return {
      role:action.payload
    };
  }
  default:
    return state;
  }
};

export default AuthReducer;