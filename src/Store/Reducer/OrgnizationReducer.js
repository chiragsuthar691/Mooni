import { SET_ORGANIZTION, SET_ORG_LOADING } from "../Actions/types";

const initialState = {
  organization: {},
  orgLoading: false,
};

const OrgnizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORGANIZTION:
      return { ...state, organization: action.payload };
    case SET_ORG_LOADING:
      return { ...state, orgLoading: action.payload };
    default:
      return state;
  }
};
export default OrgnizationReducer;
