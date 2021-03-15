import { SET_LOGIN, SET_PASSWORD, SET_ERROR } from "../constants/ActionTypes";

const initialState = {
  login: "",
  password: "",
  error: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN: {
      return {
        ...state,
        login: action.payload,
      };
    }
    case SET_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
