import axios from "axios";
import { REACT_APP_APIURL, REACT_APP_APIURL_ERP } from "../Global/environment";
import {
  setInventoryList,
  setInventoryLoading,
} from "../Store/Actions/InventoryAction";

export const getInventoryItemsList = (payload) => async (dispatch) => {
  try {
    const company_id = "";
    dispatch(setInventoryLoading(true));
    const response = await axios.get(`${REACT_APP_APIURL_ERP}//products`);
    const { data } = response.data;
    console.log("data", data);
    dispatch(setInventoryList(data));
  } catch (error) {
    console.log("error", error);
    // dispatch(displayErrorMessage());
  } finally {
    dispatch(setInventoryLoading(false));
  }
};

export const setInventoryItemList = (payload) => async (dispatch) => {
  try {
    if (payload) {
      dispatch(setInventoryLoading(true));
      console.log("payload", payload);
      const response = await axios.post(`${REACT_APP_APIURL}/item`, payload);
      const data = response.data;
      console.log("data", data);
      //   dispatch();
    }
  } catch (error) {
    console.log("error", error);
    // dispatch(displayErrorMessage());
  } finally {
    dispatch(setInventoryLoading(false));
  }
};
