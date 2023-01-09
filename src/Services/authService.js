import axios from "axios";
import jwtDecode from "jwt-decode";
import { REACT_APP_APIURL } from "../Global/environment";
import { saveToken } from "../Helper/AuthTokenHelper";
import UserPreferenceSingleton from "../Helper/UserPrefenceSingleton";
import { setAuthLoading, setCurrentUser } from "../Store/Actions/AuthAction";
import { resMessage } from "../Store/Actions/MessageAction";
import { loadRequiredData } from "./BaseService";

export const setLoginToken = (access_Token) => async (dispatch) => {
  saveToken(access_Token);
  const decoded = jwtDecode(access_Token);
  UserPreferenceSingleton.getInstance().setEmail(decoded.email);
  UserPreferenceSingleton.getInstance().setDisplayName(decoded.name);
  dispatch(setCurrentUser(decoded));
};

export const login = (payload) => async (dispatch) => {
  try {
    if (payload) {
      dispatch(setAuthLoading(true));
      const response = await axios.post(
        `${REACT_APP_APIURL}/auth/login`,
        payload
      );
      const { data } = response.data;
      UserPreferenceSingleton.getInstance().setLanguage(data?.language);
      dispatch(setLoginToken(data.token));
      return await dispatch(loadRequiredData());
    }
  } catch (error) {
    console.log("error", error);
    // dispatch(displayErrorMessage());
  } finally {
    dispatch(setAuthLoading(false));
  }
};

export const forgotPassword = (payload) => async (dispatch) => {
  try {
    if (payload) {
      dispatch(setAuthLoading(true));
      const response = await axios.post(
        `${REACT_APP_APIURL}/auth/forgot-password`,
        payload
      );
      const { message } = response.data;
      dispatch(resMessage(message));
      return;
    }
  } catch (error) {
    console.log("error", error);
    // dispatch(displayErrorMessage());
  } finally {
    dispatch(setAuthLoading(false));
  }
};
