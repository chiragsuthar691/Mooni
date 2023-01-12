import axios from "axios";
import { REACT_APP_APIURL } from "../Global/environment";
import { clearResponseMessage } from "../Store/Actions/MessageAction";
import {
  setSettingLoader,
  setUserAndRolesList,
} from "../Store/Actions/SettingAction";

export const getUsersAndRolesList = (companyId) => async (dispatch) => {
  try {
    dispatch(clearResponseMessage());
    const response = await axios.get(
      `${REACT_APP_APIURL}/company/${companyId}`
    );
    const { data } = response.data;
    // console.log("data", data);
    if (data)
      dispatch(
        setUserAndRolesList({
          users: data.users || [],
          invitedUsers: data.invited_users,
        })
      );
    return true;
  } catch (e) {
    console.log("e", e);
    return false;
  } finally {
    dispatch(setSettingLoader(false));
  }
};
