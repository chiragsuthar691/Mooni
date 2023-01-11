import AccessDenied from "../Components/AccessDenied";
import NotFound from "../Components/NotFound";
import Shortcuts from "../Components/Shortcuts";
import BussinesOverview from "../Views/BusinessOverview/BussinesOverview";
import Dashboard from "../Views/Dashboard/Dashboard";
import DashboardOverview from "../Views/Dashboard/DashboardOverview";
import AddItem from "../Views/Item/AddItem";
import ProductPricing from "../Views/ProductPricing/ProductPricing";
import Transactions from "../Views/Transactions/Transactions";
import Warehouse from "../Views/Warehouse/Warehouse";
import Workbook from "../Views/WorkBook/Workbook";
import Contact from "../Views/Contact/AllContact";
import Customer from "../Views/Contact/Customer";
import AddBroker from "../Views/Contact/Broker";
import Supplier from "../Views/Contact/Supplier";
import ProtectedRoutes from "./ProtectedRoutes";
import CashBank from "../Views/Cash-Bank/Cash-Bank";
import Sales from "../Views/Sales/Sales";
import PurchaseChallan from "../Views/PurchaseChallan/PurchaseChallan";
import Purchase from "../Views/Purchase/Purchase";
import SalesOrder from "../Views/SalesOrder/SalesOrder";
import CreditNote from "../Views/CreditNotes/CreditNote";
import DebitNote from "../Views/DebitNotes/DebitNotes";
import Offline from "../Views/Orders/OfflineOrders";
import Online from "../Views/Orders/OnlineOrders";
import Reports from "../Views/Report/Report";
import Chats from "../Views/Chats/Chats";
import JournalTransactions from "../Views/JournalTransactions/JournalTransactions";

/**
 * Routes Array
 * Same properties should match for all attributes
 */

const routes = [
  {
    path: "/",
    exact: true,
    element: (
      // <ProtectedRoutes>
      <Dashboard />
      // </ProtectedRoutes>
    ),
    private: true,
    children: [
      {
        index: true,
        element: (
          // <ProtectedRoutes>
          <DashboardOverview />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "overview",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <Shortcuts />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/BussinesOverview",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <BussinesOverview />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/overview",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <DashboardOverview />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/additem",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <AddItem />
          // </ProtectedRoutes>
        ),
        private: true,
      },
      {
        index: true,
        element: (
          // <ProtectedRoutes>
          <DashboardOverview />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "transactions",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <Transactions />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/warehouse",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <Warehouse />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/workbook",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <Workbook />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/product-pricing",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <ProductPricing />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/contact/all",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <Contact />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/contact/customer",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <Customer />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/contact/supplier",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <Supplier />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/contact/broker",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <AddBroker />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/journal-transactions",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <JournalTransactions />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/cash-bank",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <CashBank />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/sales",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <Sales />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/debit-Notes",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <DebitNote />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/credit-notes",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <CreditNote />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/purchase",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <Purchase />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/purchase-challan",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <PurchaseChallan />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/sales-orders",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <SalesOrder />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/online-orders",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <Online />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/offline-orders",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <Offline />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/chats",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <Chats />
          // </ProtectedRoutes>
        ),
      },
      {
        path: "/reports",
        exact: true,
        element: (
          // <ProtectedRoutes>
          <Reports />
          // </ProtectedRoutes>
        ),
      },
    ],
  },
];
export default routes;
