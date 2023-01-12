import { SET_SETTING_LOADER, SET_USER_AND_ROLES_LIST } from "../Actions/types";

const initialState = {
  loading: false,
  users: [],
  invitedUsers: undefined,
  userRoles: undefined,
  userAndRolesList: undefined,
};

const settingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTING_LOADER:
      return { ...state, loading: action.payload };
    case SET_USER_AND_ROLES_LIST:
      // console.log("action.payload", action.payload);
      return {
        ...state,
        invitedUsers: action.payload.invitedUsers,
        userRoles: action.payload.userRoles,
        userAndRolesList: action.payload.userAndRolesList,
      };
    default:
      return state;
  }
};

export default settingReducer;
