import {
  SET_COMPANYLIST,
  SET_COMPANY_DETAILS,
  SET_COMPANY_LOADING,
  SET_SELECTED_COMPANY,
} from "../Actions/types";

const initialState = {
  companylist: [],
  loading: false,
  selectedCompany: {},
  companyDetails: {},
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANYLIST:
      return { ...state, companylist: action.payload };
    case SET_COMPANY_LOADING:
      return { ...state, loading: action.payload };
    case SET_SELECTED_COMPANY:
      return { ...state, selectedCompany: action.payload };
    case SET_COMPANY_DETAILS:
      return { ...state, companyDetails: action.payload };
    default:
      return state;
  }
};

export default companyReducer;
