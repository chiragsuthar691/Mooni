import {
  CLR_RESPONSE_MESSAGE,
  RES_MESSAGE,
  SET_ITEM_ERROR_MSG,
  SET_RES_ERROR_MSG,
} from "./types";

/**
 * @desc response message
 */
export const resMessage = (payload) => {
  return {
    type: RES_MESSAGE,
    payload,
  };
};

/**
 * @desc clear response message
 */
export const clearResponseMessage = (payload) => {
  return {
    type: CLR_RESPONSE_MESSAGE,
    payload,
  };
};

/**
 * @desc Set Error message
 */
export const setErrorMessage = (payload) => {
  return {
    type: SET_RES_ERROR_MSG,
    payload: payload,
  };
};

/**
 * @desc Set Error message
 */
export const setItemErrorMessage = (payload) => {
  return {
    type: SET_ITEM_ERROR_MSG,
    payload,
  };
};
