import {
  SET_INVENTORY_GALLERY_DATA,
  SET_INVENTORY_ITEM,
  SET_INVENTORY_LIST,
  SET_INVENTORY_LOADING,
} from "./types";

/**
 * @desc Set Inventory Loading
 */
export const setInventoryLoading = (payload) => {
  return {
    type: SET_INVENTORY_LOADING,
    payload,
  };
};

/**
 * @desc set inventory gallery data
 */
export const setInventoryGalleryData = (payload) => {
  return {
    type: SET_INVENTORY_GALLERY_DATA,
    payload,
  };
};

/**
 * @desc set inventory item
 */
export const setInventoryItem = (payload) => {
  return {
    type: SET_INVENTORY_ITEM,
    payload,
  };
};

/**
 * @desc set inventory list
 */
export const setInventoryList = (payload) => {
  return {
    type: SET_INVENTORY_LIST,
    payload,
  };
};
