import { isEmpty } from "../../Helper/Common";
import store from "../Store";
import { SET_SETTING_LOADER, SET_USER_AND_ROLES_LIST } from "./types";

/**
 * @desc Set Setting Loader
 */
export const setSettingLoader = (payload) => {
  return {
    type: SET_SETTING_LOADER,
    payload,
  };
};

/**
 * @desc Set User And Roles List
 */
export const setUserAndRolesList = (payload) => {
  const userAndRolesList = payload.users;
  const invitedUsers = payload.invitedUsers;
  const { auth } = store.getState();
  const currentUser = auth.user;
  let userRoles;
  if (
    !isEmpty(currentUser) &&
    userAndRolesList &&
    userAndRolesList.length > 0
  ) {
    userRoles = userAndRolesList.find((x) => x.id === currentUser.id);
  }
  const usersPayload = { userRoles, invitedUsers, userAndRolesList };
  // console.log("usersPayload, usersPayload");
  return {
    type: SET_USER_AND_ROLES_LIST,
    payload: usersPayload,
  };
};
