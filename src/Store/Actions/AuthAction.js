import { isEmpty } from "../../Helper/Common";
import UserPreferenceSingleton from "../../Helper/UserPrefenceSingleton";
import {
  SET_AUTH_LOADING,
  SET_AUTH_TOKEN,
  SET_CURRENT_USER,
  SET_USER,
} from "./types";

// /**
//  * @desc Set User
//  */
// export const setUser = (payload) => ({
//   type: SET_USER,
//   payload,
// });

/**
 * @desc Set Auth Loading
 */
export const setAuthLoading = (payload) => {
  return {
    type: SET_AUTH_LOADING,
    payload,
  };
};

/**
 * @desc Set Auth Token
 */
export const setAuthToken = (payload) => {
  return {
    type: SET_AUTH_TOKEN,
    payload,
  };
};

/**
 * @desc Set Current User
 */
export const setCurrentUser = (payload) => {
  const language = UserPreferenceSingleton.getInstance().getLanguage();
  if (!isEmpty(payload)) payload = { ...payload, language };
  return {
    type: SET_CURRENT_USER,
    payload: payload,
  };
};
