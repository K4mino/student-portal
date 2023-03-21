export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


export const emailRules = [
  {validator:(_,value) => {
    if(emailRegex.test(value)){
      return Promise.resolve();
    }return Promise.reject('Пожалуйста введите верный email!');
  }}
];

export const passwordRules = [
  {validator:(_,value) => {
    if(passwordRegex.test(value)){
      return Promise.resolve();
    }return Promise.reject('Пожалуйста введите верный пароль(минимум 8 символов)!');
  }}
];

export const phoneRules = [
  {required:true,message:'Введите ваш телефон'},
  {min:11,message:'Минимум 11 символов'}
];
