import UserPreferenceSingleton from "../Helper/UserPrefenceSingleton";
import { clearResponseMessage } from "../Store/Actions/MessageAction";
import { getCompanyList } from "./CompanyService";

/**
 * @desc Load required data
 * @param {*} dispatch
 */

export const loadRequiredData = () => async (dispatch) => {
  try {
    dispatch(clearResponseMessage());
    await dispatch(getCompanyList());
    const company_id = UserPreferenceSingleton.getInstance.getCompanyId();
    if (company_id) {
    }
  } catch (e) {
    console.log("e", e);
  }
};

export const isRoleAccess = (roleName) => {};
