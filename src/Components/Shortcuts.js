import { HeadingP, InvisibleBox, SmallBox } from "./Common";
import InventoryIcon from "@mui/icons-material/Inventory";
import ContactsIcon from "@mui/icons-material/Contacts";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PaymentsIcon from "@mui/icons-material/Payments";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Link } from "react-router-dom";
import DashboardOverview from "../Views/Dashboard/DashboardOverview";

const Shortcuts = () => {
  return (
    <div className="dashboard-container">
      <DashboardOverview />
      <div className="dashboard-shortcuts">
        <div>
          <HeadingP>Shortcuts</HeadingP>
        </div>
        <div className="grid">
          <InvisibleBox>
            <Link to="/additem">
              <SmallBox>
                <InventoryIcon fontSize="large" />
              </SmallBox>
              Inventory
            </Link>
          </InvisibleBox>
          <InvisibleBox>
            <Link to="/contact/all">
              <SmallBox>
                <ContactsIcon fontSize="large" />
              </SmallBox>
              Contact
            </Link>
          </InvisibleBox>
          <InvisibleBox>
            <Link to="/journal-transactions">
              <SmallBox>
                <ReceiptLongIcon fontSize="large" />
              </SmallBox>
              Journal Transactions
            </Link>
          </InvisibleBox>
          <InvisibleBox>
            <Link to="/cash-bank">
              <SmallBox>
                <AccountBalanceIcon fontSize="large" />
              </SmallBox>
              Cash & Bank
            </Link>
          </InvisibleBox>
          <InvisibleBox>
            <Link to="/sales">
              <SmallBox>
                <MonetizationOnIcon fontSize="large" />
              </SmallBox>
              Sales
            </Link>
          </InvisibleBox>
          <InvisibleBox>
            <Link to="/purchase">
              <SmallBox>
                <ShoppingBasketIcon fontSize="large" />
              </SmallBox>
              Purchase
            </Link>
          </InvisibleBox>
          <InvisibleBox>
            <Link to="/credit-notes">
              <SmallBox>
                <PaymentsIcon fontSize="large" />
              </SmallBox>
              Credit Notes
            </Link>
          </InvisibleBox>
          <InvisibleBox>
            <Link to="/debit-notes">
              <SmallBox>
                <RequestQuoteIcon fontSize="large" />
              </SmallBox>
              Debit Notes
            </Link>
          </InvisibleBox>
          <InvisibleBox>
            <Link to="/online-orders">
              <SmallBox>
                <BookOnlineIcon fontSize="large" />
              </SmallBox>
              Online Orders
            </Link>
          </InvisibleBox>
          <InvisibleBox>
            <Link to="/offline-orders">
              <SmallBox>
                <LocalMallIcon fontSize="large" />
              </SmallBox>
              Offline Orders
            </Link>
          </InvisibleBox>
          <InvisibleBox>
            <Link to="/reports">
              <SmallBox>
                <AssessmentIcon fontSize="large" />
              </SmallBox>
              Reports
            </Link>
          </InvisibleBox>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;
