import {
  SET_COMPANYLIST,
  SET_COMPANY_LOADING,
  SET_SELECTED_COMPANY,
} from "../Actions/types";

const initialState = {
  companylist: {},
  loading: false,
  selectedCompany: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANYLIST:
      return { ...state, email: action.payload };
    case SET_COMPANY_LOADING:
      return { ...state, loading: action.payload };
    case SET_SELECTED_COMPANY:
      return { ...state, selectedCompany: action.payload };
    default:
      return state;
  }
};

export default authReducer;
