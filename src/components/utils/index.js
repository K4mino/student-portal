export const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
export const passwordRegex =  new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/);


export const isInputEmpty = (value) => {
    if(!value){
        return true;
    }

    let trimmedValue = value.trim();

    if(trimmedValue === ''){
        return true;
    }

    return false;
};