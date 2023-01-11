import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ChatIcon from "@mui/icons-material/Chat";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import ContactsIcon from "@mui/icons-material/Contacts";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { DropDown, DropDownItem, LeftSpaceSpan, YCenterDiv } from "./Common";
import { Link } from "react-router-dom";
import { useState } from "react";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const Listcontainer = () => {
  const [isOpenInventory, setIsOpenInventory] = useState(false);
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isOpenAccounts, setIsOpenAccounts] = useState(false);
  const [isOpenOrders, setIsOpenOrders] = useState(false);

  const handleInventory = () => {
    setIsOpenInventory(!isOpenInventory);
  };
  const handleContact = () => {
    setIsOpenContact(!isOpenContact);
  };
  const handleAccounts = () => {
    setIsOpenAccounts(!isOpenAccounts);
  };
  const handleOrders = () => {
    setIsOpenOrders(!isOpenOrders);
  };
  return (
    <List
      sx={style}
      component="nav"
      aria-label="mailbox folders"
      className="sidebar"
    >
      <ListItem button>
        <Link to="/overview">
          <ListItemText>
            <YCenterDiv>
              <DashboardIcon />
              <LeftSpaceSpan>Dashboard</LeftSpaceSpan>
            </YCenterDiv>
          </ListItemText>
        </Link>
      </ListItem>
      <Divider />
      <ListItem button divider onClick={handleInventory}>
        <ListItemText>
          <YCenterDiv>
            <Link to="additem">
              <InventoryIcon />
              <LeftSpaceSpan>Inventory</LeftSpaceSpan>
            </Link>
          </YCenterDiv>
          {isOpenInventory ? (
            <DropDown>
              <div>
                <DropDownItem>
                  <Link to="additem">Item</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/transactions">Transactions</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/warehouse">Warehouse</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/workbook">Workbook</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/product-pricing">Product Pricing</Link>
                </DropDownItem>
              </div>
            </DropDown>
          ) : (
            ""
          )}
        </ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>
          <YCenterDiv>
            <Link to="/contact/all">
              <ContactsIcon />
              <LeftSpaceSpan onClick={handleContact}>Contact</LeftSpaceSpan>
            </Link>
          </YCenterDiv>
          {isOpenContact ? (
            <DropDown>
              <div>
                <DropDownItem>
                  <Link to="/contact/all">All</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/contact/customer">Customer</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/contact/supplier">Supplier</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/contact/broker">Broker</Link>
                </DropDownItem>
              </div>
            </DropDown>
          ) : (
            ""
          )}
        </ListItemText>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText>
          <YCenterDiv>
            <Link to="/journal-transactions">
              <PersonIcon />
              <LeftSpaceSpan onClick={handleAccounts}>Accounts</LeftSpaceSpan>
            </Link>
          </YCenterDiv>
          {isOpenAccounts ? (
            <DropDown>
              <div>
                <DropDownItem>
                  <Link to="/journal-transactions">Journal Transactions</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/cash-bank">Cash & Bank</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/sales">Sales</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/purchase-challan">Purchase Challan</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/purchase">Purchase</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/sales-orders">Sales Orders</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/credit-notes">Credit Notes</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/debit-notes">Dedit Notes</Link>
                </DropDownItem>
              </div>
            </DropDown>
          ) : (
            ""
          )}
        </ListItemText>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText>
          <YCenterDiv>
            <ShoppingCartIcon />
            <LeftSpaceSpan onClick={handleOrders}>Orders</LeftSpaceSpan>
          </YCenterDiv>
          {isOpenOrders ? (
            <DropDown>
              <div>
                <DropDownItem>
                  <Link to="/online-orders">Online</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/offline-orders">Offline</Link>
                </DropDownItem>
              </div>
            </DropDown>
          ) : (
            ""
          )}
        </ListItemText>
      </ListItem>
      <Divider light />
      <ListItem button>
        <Link to="/chats">
          <ListItemText>
            <YCenterDiv>
              <ChatIcon />
              <LeftSpaceSpan>Chats</LeftSpaceSpan>
            </YCenterDiv>
          </ListItemText>
        </Link>
      </ListItem>
      <Divider light />
      <ListItem button>
        <Link to="/reports">
          <ListItemText>
            <YCenterDiv>
              <AssessmentIcon />
              <LeftSpaceSpan>Reports</LeftSpaceSpan>
            </YCenterDiv>
          </ListItemText>
        </Link>
      </ListItem>
    </List>
  );
};

export default Listcontainer;
