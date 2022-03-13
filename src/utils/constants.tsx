import { getStore } from '../store/GlobalStore';

export const _Length = (val: string) => {
  if (val.length > 7) {
    return true;
  } else {
    return false;
  }
};

export const _LowerCase = (val: string) => {
  return /[a-z]/.test(val);
};

export const _UpperCase = (val: string) => {
  return /[A-Z]/.test(val);
};

export const _Number = (val: string) => {
  return /\d/.test(val);
};

export const _SpecialCharacter = (val: string) => {
  const specialCharacterRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialCharacterRegex.test(val);
};

export const toastFlashMessage = (message: string, type: string, delay = 5000) => {
  const { dispatch } = getStore();

  dispatch({
    type: 'CLEAR_TOAST',
    payload: '',
  });
  setTimeout(function () {
    dispatch({
      type: 'SHOW_TOAST',
      payload: {
        message: message,
        toastType: type,
      },
    });
    setTimeout(function () {
      dispatch({
        type: 'HIDE_TOAST',
        payload: {},
      });
    }, delay);
  }, 200);
};

export const getUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
  if (userInfo) {
    return userInfo;
  }
  return null;
};

export const capitalizeFirstLetter = (val: string): string => {
  return val.charAt(0).toUpperCase() + val.slice(1);
};
