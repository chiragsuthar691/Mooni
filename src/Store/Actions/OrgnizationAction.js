import { SET_ORGANIZTION, SET_ORG_LOADING } from "./types";

/**
 *
 * @desc Set Organiztion
 */
export const setOrganiztion = (payload) => {
  return {
    type: SET_ORGANIZTION,
    payload,
  };
};

/**
 *
 * @desc Set Org Loading
 */
export const setOrgLoading = (payload) => {
  return {
    type: SET_ORG_LOADING,
    payload,
  };
};
