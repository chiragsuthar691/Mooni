import {
  SET_COMPANYLIST,
  SET_COMPANY_DETAILS,
  SET_COMPANY_LOADING,
  SET_SELECTED_COMPANY,
} from "./types";

/**
 * @desc Set Companylist
 */
export const setCompanylist = (payload) => {
  return {
    type: SET_COMPANYLIST,
    payload,
  };
};

/**
 * @desc  Set Company Loading
 */
export const setCompanyLoading = (payload) => {
  return {
    type: SET_COMPANY_LOADING,
    payload,
  };
};

/**
 * @desc Set Selected Company
 */
export const setSelectedCompany = (payload) => {
  return {
    type: SET_SELECTED_COMPANY,
    payload,
  };
};

/**
 * @desc Set Company Details
 */
export const setCompanyDetails = (payload) => {
  return {
    type: SET_COMPANY_DETAILS,
    payload,
  };
};
