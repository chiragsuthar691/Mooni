import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import companyReducer from "./CompanyReducer";
import inventoryReducer from "./InventoryReducer";
import messageReducer from "./MessageReducer";

const reducer = combineReducers({
  auth: authReducer,
  inventory: inventoryReducer,
  message: messageReducer,
  company: companyReducer,
});

export default reducer;
