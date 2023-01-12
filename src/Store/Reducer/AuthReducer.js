import { isEmpty } from "../../Helper/Common";
import {
  SET_AUTH_LOADING,
  SET_AUTH_TOKEN,
  SET_CURRENT_USER,
  SET_USER,
} from "../Actions/types";

const initialState = {
  user: {},
  isAuthenticated: false,
  errors: {},
  loading: false,
  authToken: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, email: action.payload };
    case SET_AUTH_LOADING:
      return { ...state, loading: action.payload };
    case SET_AUTH_TOKEN:
      return { ...state, authToken: action.payload };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
