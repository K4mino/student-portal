export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


export const emailRules = [
  {required: true, message: 'Пожалуйста введите ваш email!' },
  {min:3,message:'email должен содержать минимум 3 символа'},
  {validator:(_,value) => {
    if(emailRegex.test(value)){
      return Promise.resolve();
    }return Promise.reject('Пожалуйста введите верный email!');
  }}
];

export const passwordRules = [
  { required: true, message: 'Пожалуйста введите ваш пароль!' },
  {min:8,message:'пароль должен содержать минимум 8 символов'},
  {validator:(_,value) => {
    if(passwordRegex.test(value)){
      return Promise.resolve();
    }return Promise.reject('Пожалуйста введите верный пароль!');
  }}
];

export const isInputEmpty = (value) => {
  if(!value){
    console.log(value,'1 if');
    return true;
  }
 
  const trimmedValue = value.trim();

  if(trimmedValue === ''){
    console.log(value,'2 if');
    return true;
  }
  console.log(value);
  return false;
};