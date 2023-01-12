import axios from "axios";
import { REACT_APP_APIURL } from "../Global/environment";
import { getAPIResponseError } from "../Helper/Common";
import UserPreferenceSingleton from "../Helper/UserPrefenceSingleton";
import {
  setCompanyDetails,
  setCompanylist,
  setCompanyLoading,
  setSelectedCompany,
} from "../Store/Actions/CompanyAction";
import {
  setErrorMessage,
  setItemErrorMessage,
  setSuccessMessage,
} from "../Store/Actions/MessageAction";
import store from "../Store/Store";

export const getCompanyList = () => async (dispatch) => {
  try {
    dispatch(setCompanyLoading(true));
    const response = await axios.get(`${REACT_APP_APIURL}/company`);
    const { data } = response.data;
    console.log("companylist", data);
    if (data.length > 0) {
      const companyId = UserPreferenceSingleton.getInstance().getCompanyId();
      let selectedCompany = {};
      if (!companyId) selectedCompany = data[0];
      else selectedCompany = data.find((x) => x.id === companyId);
      dispatch(setSelectedCompany(selectedCompany));
      UserPreferenceSingleton.getInstance().setCompanyId(selectedCompany.id);
    }
    dispatch(setCompanylist(data));
    return data;
  } catch (e) {
    dispatch(dispatchCompanyError(getAPIResponseError(e) || "", dispatch));
    return false;
  } finally {
    dispatch(setCompanyLoading(false));
  }
};

export const createOrganization = () => async (dispatch) => {
  try {
    dispatch(setCompanyLoading(true));
  } catch (e) {
  } finally {
    dispatch(setCompanyLoading(false));
  }
};

export const getCompanyDetails =
  (companyId, isModalError) => async (dispatch) => {
    try {
      dispatch(setCompanyLoading(true));
      const state = store.getState();
      const { companyDetails } = state.company;
      // console.log("companyDetails", companyDetails);
      if (companyDetails?.id === companyId) return true;

      const response = await axios.get(
        `${REACT_APP_APIURL}/company/${companyId}`
      );
      const { data } = response.data;
      const users = data &&
        data.length !== 0 && {
          ...data,
          comapany_users: data.users.map((item) => item.user),
        };
      dispatch(setCompanyDetails(users || {}));
    } catch (e) {
      dispatchCompanyError(
        getAPIResponseError(e) || "Something went wrong, please try again" + e,
        dispatch,
        isModalError
      );
    } finally {
      dispatch(setCompanyLoading(false));
    }
  };

const dispatchCompanyError = (msg, dispatch, isModalError = false) => {
  isModalError
    ? dispatch(setItemErrorMessage(msg))
    : dispatch(setErrorMessage(msg));
};

const dispatchCompanySuccess = (msg, dispatch) => {
  dispatch(setSuccessMessage(msg));
};
