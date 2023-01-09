import {
  CLR_RESPONSE_MESSAGE,
  RES_MESSAGE,
  SET_ITEM_ERROR_MSG,
  SET_RES_ERROR_MSG,
} from "../Actions/types";

const initialState = {
  resMessage: "",
  clrResMessage: "",
  resErrorMsg: "",
  itemErrorMsg: "",
};

const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case RES_MESSAGE:
      return { ...state, resMessage: action.payload };
    case CLR_RESPONSE_MESSAGE:
      return { ...state, clrResMessagege: initialState };
    case SET_RES_ERROR_MSG:
      return { ...state, itemErrorMsg: action.payload };
    case SET_ITEM_ERROR_MSG:
      return { ...state, resErrorMsg: action.payload };
    default:
      return state;
  }
};

export default MessageReducer;
