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
import {
  RoleBanking,
  RoleContact,
  RoleDashboard,
  RoleInventory,
  RoleOnlineOrders,
  RoleOrders,
  RolePurchase,
  RoleReports,
  RoleSales,
} from "../Global/Constant";

/**
 * Routes Array
 * Same properties should match for all attributes
 */

const routes = [
  {
    path: "/",
    exact: true,
    element: (
      <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>
    ),
    private: true,
    children: [
      {
        path: "dashboard",
        // index: true,
        element: (
          <ProtectedRoutes>
            <DashboardOverview />
          </ProtectedRoutes>
        ),
      },
      {
        path: "dashboard/shortcuts",
        exact: true,
        element: (
          <ProtectedRoutes>
            <Shortcuts />
          </ProtectedRoutes>
        ),
      },
      {
        path: "dashboard/*",
        exact: true,
        element: (
          <ProtectedRoutes>
            <NotFound />
          </ProtectedRoutes>
        ),
      },
      {
        path: "dashboard/BussinesOverview",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleDashboard}>
            <BussinesOverview />
          </ProtectedRoutes>
        ),
      },
      //  {
      //   path: "overview",
      //   exact: true,
      //   element: (
      //     // <ProtectedRoutes>
      //     <DashboardOverview />
      //     // </ProtectedRoutes>
      //   ),
      // },
      {
        path: "/additem",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleInventory}>
            <AddItem />
          </ProtectedRoutes>
        ),
      },
      {
        index: true,
        element: (
          <ProtectedRoutes>
            <DashboardOverview />
          </ProtectedRoutes>
        ),
      },
      {
        path: "transactions",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleInventory}>
            <Transactions />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/warehouse",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleInventory}>
            <Warehouse />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/workbook",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleInventory}>
            <Workbook />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/product-pricing",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleInventory}>
            <ProductPricing />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/contact/all",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleContact}>
            <Contact />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/contact/customer",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleContact}>
            <Customer />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/contact/supplier",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleContact}>
            <Supplier />
          </ProtectedRoutes>
        ),
        role: RoleContact,
      },
      {
        path: "/contact/broker",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleContact}>
            <AddBroker />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/journal-transactions",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleBanking}>
            <JournalTransactions />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/cash-bank",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleBanking}>
            <CashBank />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/sales",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleSales}>
            <Sales />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/debit-Notes",
        exact: true,
        element: (
          <ProtectedRoutes role={RolePurchase}>
            <DebitNote />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/credit-notes",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleSales}>
            <CreditNote />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/purchase",
        exact: true,
        element: (
          <ProtectedRoutes role={RolePurchase}>
            <Purchase />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/purchase-challan",
        exact: true,
        element: (
          <ProtectedRoutes role={RolePurchase}>
            <PurchaseChallan />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/sales-orders",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleOrders}>
            <SalesOrder />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/online-orders",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleOnlineOrders}>
            <Online />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/offline-orders",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleOrders}>
            <Offline />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/chats",
        exact: true,
        element: (
          <ProtectedRoutes>
            <Chats />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/reports",
        exact: true,
        element: (
          <ProtectedRoutes role={RoleReports}>
            <Reports />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/access-denied",
        exact: true,
        element: (
          <ProtectedRoutes>
            <AccessDenied />
          </ProtectedRoutes>
        ),
      },
    ],
  },
];
export default routes;
