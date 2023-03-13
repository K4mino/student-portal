export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


export const isInputEmpty = (value) => {
  if(!value){
    console.log(value,'1 if')
    return true;
  }
 
  const trimmedValue = value.trim();

  if(trimmedValue === ''){
    console.log(value,'2 if')
    return true;
  }
  console.log(value)
  return false;
};