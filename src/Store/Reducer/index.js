import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import companyReducer from "./CompanyReducer";
import inventoryReducer from "./InventoryReducer";
import messageReducer from "./MessageReducer";
import settingReducer from "./SettingReducer";

const reducer = combineReducers({
  auth: authReducer,
  inventory: inventoryReducer,
  message: messageReducer,
  company: companyReducer,
  setting: settingReducer,
});

export default reducer;
