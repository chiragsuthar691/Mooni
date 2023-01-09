import axios from "axios";
import { REACT_APP_APIURL } from "../Global/environment";
import { getAPIResponseError } from "../Helper/Common";
import UserPreferenceSingleton from "../Helper/UserPrefenceSingleton";
import {
  setCompanylist,
  setCompanyLoading,
  setSelectedCompany,
} from "../Store/Actions/CompanyAction";
import {
  setErrorMessage,
  setItemErrorMessage,
} from "../Store/Actions/MessageAction";

export const getCompanyList = () => async (dispatch) => {
  try {
    dispatch(setCompanyLoading(true));
    const response = await axios.get(`${REACT_APP_APIURL}/company`);
    const { data } = response.data;
    console.log("data", data);
    if (data.length > 0) {
      const companyId = UserPreferenceSingleton.getInstance().getCompanyId();
      let selectedCompany = {};
      if (!companyId) selectedCompany = data[0];
      else selectedCompany = data.find((x) => x.id === companyId);
      dispatch(setSelectedCompany(selectedCompany));
      UserPreferenceSingleton.getInstance().setCompanyId(selectedCompany.id);
    }
    dispatch(setCompanylist(data));
    return true;
  } catch (e) {
    dispatch(dispatchCompanyError(getAPIResponseError(e) || "", dispatch));
    return false;
  } finally {
    dispatch(setCompanyLoading(false));
  }
};

const dispatchCompanyError = (msg, dispatch, isModalError = false) => {
  isModalError
    ? dispatch(setItemErrorMessage(msg))
    : dispatch(setErrorMessage(msg));
};
