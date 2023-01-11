import {
  SET_INVENTORY_GALLERY_DATA,
  SET_INVENTORY_ITEM,
  SET_INVENTORY_LOADING,
} from "../Actions/types";

const initialState = {
  loading: false,
  itemList: {},
  inventoryItem: {
    gallery: [],
    name: "",
    category: "",
    hsn_code: "",
    tax_rate_slab: "",
    price_tax_type: "",
    sku: "",
    purchase_sku: "",
    barcode: "",
    track: false,
    alert: false,
    suppiler: "",
    notes: "",
    selling_price: "",
    supplier_price: "",
    catelogue: "",
    tags: "",
    packing_bag_size: "",
    weight: "",
    Height: "",
    Breadth: "",
    Length: "",
    Dimensions: "",
  },
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INVENTORY_LOADING:
      return { ...state, loading: action.payload };
    case SET_INVENTORY_ITEM:
      return { ...state, inventoryItem: action.payload };
    case SET_INVENTORY_GALLERY_DATA:
      console.log("action.payload", action.payload);
      console.log("gallerys", state.inventoryItem.gallery);
      return {
        ...state,
        ...state.inventoryItem,
        gallery: [...state.inventoryItem.gallery, action.payload],
      };
    default:
      return state;
  }
};

export default inventoryReducer;
