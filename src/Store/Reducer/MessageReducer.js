import {
  CLR_RESPONSE_MESSAGE,
  RES_SUCCESS_MESSAGE,
  SET_ITEM_ERROR_MSG,
  SET_RES_ERROR_MSG,
} from "../Actions/types";

const initialState = {
  resSuccess: "",
  clrResMessage: "",
  resError: "",
  itemErrorMsg: "",
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case RES_SUCCESS_MESSAGE:
      return { ...state, resSuccess: action.payload };
    case CLR_RESPONSE_MESSAGE:
      return { ...state, clrResMessagege: initialState };
    case SET_RES_ERROR_MSG:
      return { ...state, itemErrorMsg: action.payload };
    case SET_ITEM_ERROR_MSG:
      return { ...state, resError: action.payload };
    default:
      return state;
  }
};

export default messageReducer;
