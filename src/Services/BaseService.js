import axios from "axios";
import {
  APP_INIT_RESPONSE_TYPE,
  RoleBanking,
  RoleContact,
  RoleDashboard,
  RoleInventory,
  RoleOnlineOrders,
  RoleOrders,
  RolePurchase,
  RoleReports,
  RoleSales,
  RoleUserAndRoles,
} from "../Global/Constant";
import { REACT_APP_APIURL, REACT_APP_APIURL_ERP } from "../Global/environment";
import UserPreferenceSingleton from "../Helper/UserPrefenceSingleton";
import { clearResponseMessage } from "../Store/Actions/MessageAction";
import store from "../Store/Store";
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

export const isRoleAccess = (roleName) => (getState) => {
  const { setting } = store.getState();
  const { userRoles } = setting;
  if (userRoles && userRoles.roles && userRoles.roles.length > 0) {
    let role = userRoles.roles.find((x) => (x.name = roleName));
    switch (roleName) {
      case RoleDashboard:
        return {
          is_write_access: role?.is_write_access,
          is_read_access: role?.is_read_access,
          is_delete_access: role?.is_delete_access,
        };
      case RoleBanking:
        return {
          is_write_access: role?.is_write_access,
          is_read_access: role?.is_read_access,
          is_delete_access: role?.is_delete_access,
        };
      case RoleContact:
        return {
          is_write_access: role?.is_write_access,
          is_read_access: role?.is_read_access,
          is_delete_access: role?.is_delete_access,
        };
      case RoleInventory:
        return {
          is_write_access: role?.is_write_access,
          is_read_access: role?.is_read_access,
          is_delete_access: role?.is_delete_access,
        };
      case RolePurchase:
        return {
          is_write_access: role?.is_write_access,
          is_read_access: role?.is_read_access,
          is_delete_access: role?.is_delete_access,
        };
      case RoleSales:
        return {
          is_write_access: role?.is_write_access,
          is_read_access: role?.is_read_access,
          is_delete_access: role?.is_delete_access,
        };
      case RoleReports:
        return {
          is_write_access: role?.is_write_access,
          is_read_access: role?.is_read_access,
          is_delete_access: role?.is_delete_access,
        };
      case RoleOrders:
        return {
          is_write_access: role?.is_write_access,
          is_read_access: role?.is_read_access,
          is_delete_access: role?.is_delete_access,
        };
      case RoleOnlineOrders:
        return {
          is_write_access: role?.is_write_access,
          is_read_access: role?.is_read_access,
          is_delete_access: role?.is_delete_access,
        };
      case RoleUserAndRoles:
        if (userRoles?.is_owner) {
          return {
            is_write_access: true,
            is_read_access: true,
            is_delete_access: true,
          };
        }
        break;
      default:
        break;
    }
  }
  return {
    is_write_access: false,
    is_read_access: false,
    is_delete_access: false,
  };
};

export const clearOlderThanThreeMonthsLocalData = () => {};
