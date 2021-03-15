import { SET_LOGIN, SET_PASSWORD, SET_ERROR } from "../constants/ActionTypes";

export const setLogin = (value) => {
  return {
    type: SET_LOGIN,
    payload: value,
  };
};

export const setPassword = (value) => {
  return {
    type: SET_PASSWORD,
    payload: value,
  };
};

export const setError = (value) => {
  return {
    type: SET_ERROR,
    payload: value,
  };
};
