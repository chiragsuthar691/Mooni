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
        <ListItemText>
          <YCenterDiv>
            <DashboardIcon />
            <LeftSpaceSpan>
              <Link to="/dashboard/overview">Dashboard</Link>
            </LeftSpaceSpan>
          </YCenterDiv>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem button divider onClick={handleInventory}>
        <ListItemText>
          <YCenterDiv>
            <InventoryIcon />
            <LeftSpaceSpan>Inventory</LeftSpaceSpan>
          </YCenterDiv>
          {isOpenInventory ? (
            <DropDown>
              <div>
                <DropDownItem>
                  <Link to="additem">Item</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/transactions">Transactions</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/warehouse">Warehouse</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/workbook">Workbook</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/product-pricing">Product Pricing</Link>
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
            <ContactsIcon />
            <LeftSpaceSpan onClick={handleContact}>Contact</LeftSpaceSpan>
          </YCenterDiv>
          {isOpenContact ? (
            <DropDown>
              <div>
                <DropDownItem>
                  <Link to="/dashboard/contact/all">All</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/contact/customer">Customer</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/contact/supplier">Supplier</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/contact/broker">Broker</Link>
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
            <PersonIcon />
            <LeftSpaceSpan onClick={handleAccounts}>Accounts</LeftSpaceSpan>
          </YCenterDiv>
          {isOpenAccounts ? (
            <DropDown>
              <div>
                <DropDownItem>
                  <Link to="/dashboard/journal-transactions">
                    Journal Transactions
                  </Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/cash-bank">Cash & Bank</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/sales">Sales</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/purchase-challan">Purchase Challan</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/purchase">Purchase</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/sales-orders">Sales Orders</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/credit-notes">Credit Notes</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/debit-notes">Dedit Notes</Link>
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
                  <Link to="/dashboard/online-orders">Online</Link>
                </DropDownItem>
                <DropDownItem>
                  <Link to="/dashboard/offline-orders">Offline</Link>
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
            <ChatIcon />
            <LeftSpaceSpan>
              <Link to="/dashboard/chats">Chats</Link>
            </LeftSpaceSpan>
          </YCenterDiv>
        </ListItemText>
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText>
          <YCenterDiv>
            <AssessmentIcon />
            <LeftSpaceSpan>
              <Link to="/dashboard/reports">Reports</Link>
            </LeftSpaceSpan>
          </YCenterDiv>
        </ListItemText>
      </ListItem>
    </List>
  );
};

export default Listcontainer;
