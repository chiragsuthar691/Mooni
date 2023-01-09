import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ListSharpIcon from "@mui/icons-material/ListSharp";
import {
  DownRightMenu,
  MediumButton,
  Nav,
  NavItem,
  NavItemsContainer,
} from "../../Components/Common";
import { useCallback, useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
import AddInventory from "./AddInventory";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  getInventoryItemList,
  getInventoryItemsList,
} from "../../Services/InventoryService";

const AddItem = () => {
  const dispatch = useDispatch();
  const popupRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const addInventory = () => {
    setShowMenu(!showMenu);
  };

  const displayOptions = () => {
    setShowOptions(!showOptions);
  };

  useClickAway(popupRef, () => {
    setShowOptions(false);
  });

  const handleClose = () => {
    setShowMenu(!showMenu);
  };

  const handleChange = () => {};

  const loadData = useCallback(() => {
    dispatch(getInventoryItemsList());
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <div>
      <Nav>
        <NavItem>
          <h1>Item</h1>
        </NavItem>
        <NavItemsContainer>
          <NavItem>
            <FilterAltIcon />
          </NavItem>
          <NavItem>
            <TextField
              id="serachlist"
              type="text"
              placeholder="Searchlist"
              size="small"
              onChange={handleChange}
            />
          </NavItem>
          <NavItem>
            <MediumButton onClick={addInventory} ref={popupRef}>
              Add item
            </MediumButton>
          </NavItem>
          <NavItem onClick={displayOptions} ref={popupRef}>
            <ListSharpIcon />
          </NavItem>
        </NavItemsContainer>
      </Nav>
      {showOptions ? (
        <DownRightMenu>
          <ul>
            <li>Import</li>
            <li>Export</li>
            <li>Void Items</li>
            <li>Mapping</li>
            <li>SKU Stocks</li>
          </ul>
        </DownRightMenu>
      ) : (
        ""
      )}
      {showMenu ? <AddInventory handleClose={handleClose} /> : ""}
      {/* {showMenu ? (
        <DownRightMenu>
          <ul>
            <li>Import</li>
            <li>Export</li>
            <li>Void Items</li>
            <li>Mapping</li>
            <li>SKU Stocks</li>
          </ul>
        </DownRightMenu>
      ) : (
        ""
      )}
      {showMenu ? (
        <DownRightMenu>
          <ul>
            <li>Import</li>
            <li>Export</li>
            <li>Void Items</li>
            <li>Mapping</li>
            <li>SKU Stocks</li>
          </ul>
        </DownRightMenu>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default AddItem;
