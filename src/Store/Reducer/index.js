import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import InventoryReducer from "./InventoryReducer";
import MessageReducer from "./MessageReducer";
import OrgnizationReducer from "./OrgnizationReducer";

const reducer = combineReducers({
  auth: authReducer,
  Orgnization: OrgnizationReducer,
  Inventory: InventoryReducer,
  Message: MessageReducer,
});

export default reducer;
