import axios from "axios";
import { APP_INIT_RESPONSE_TYPE } from "../Global/Constant";
import { REACT_APP_APIURL, REACT_APP_APIURL_ERP } from "../Global/environment";
import UserPreferenceSingleton from "../Helper/UserPrefenceSingleton";
import { setCompanyLoading } from "../Store/Actions/CompanyAction";
import { clearResponseMessage } from "../Store/Actions/MessageAction";
import { getCompanyDetails, getCompanyList } from "./CompanyService";
import { getUsersAndRolesList } from "./SettingService";

/**
 * @desc Load required data
 * @param {*} dispatch
 */

export const loadRequiredData = () => async (dispatch) => {
  try {
    dispatch(clearResponseMessage());
    // const companylist =
    await dispatch(getCompanyList());
    const companyId = UserPreferenceSingleton.getInstance().getCompanyId();
    // console.log("companyId", companyId);
    if (companyId) {
      await dispatch(getCompanyDetails(companyId));
      // await dispatch(RealtimeService.getInstance().init(user.id, companyId));
      await dispatch(getUsersAndRolesList(companyId));
      // clearOlderThanThreeMonthsLocalData();
      return { type: APP_INIT_RESPONSE_TYPE.SUCCESS };
      // return { type: APP_INIT_RESPONSE_TYPE.SUCCESS, companylist };
    }
    return {
      type: APP_INIT_RESPONSE_TYPE.REDIRECT,
      path: "/addOrganization",
    };
  } catch (e) {
    console.log("e", e);
    return { type: APP_INIT_RESPONSE_TYPE.FAILED };
  }
};

export const isRoleAccess = (roleName) => {};

export const clearOlderThanThreeMonthsLocalData = () => {};
