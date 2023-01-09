import axios from "axios";
import { REACT_APP_APIURL_ERP } from "../Global/environment";
import { setOrgLoading } from "../Store/Actions/OrgnizationAction";
import { setLoginToken } from "./BaseService";

export const setOrganizationData = (payload) => async (dispatch) => {
  try {
    if (payload) {
      dispatch(setOrgLoading(true));
      const response = await axios.post(
        `${REACT_APP_APIURL_ERP}/auth/company`,
        payload
      );
      const { data } = response.data;
      console.log("data", data.message);
      console.log("data", data);

      return;
    }
  } catch (error) {
    console.log("error", error);
    // dispatch(displayErrorMessage());
  } finally {
    dispatch(setOrgLoading(false));
  }
};
