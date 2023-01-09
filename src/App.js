import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import BussinesOverview from "./Components/BussinesOverview";
import NotFound from "./Components/NotFound";
import Shortcuts from "./Components/Shortcuts";
import AddItem from "./Views/Item/AddItem";
import AddOrganization from "./Views/Organization/AddOrganization";
import Dashboard from "./Views/Dashboard/Dashboard";
import Login from "./Views/Membership/Login";
import Register from "./Views/Membership/Register";
import AllContact from "./Views/Contact/AllContact";
import CashBank from "./Views/Cash-Bank/Cash-Bank";
import Sales from "./Views/Sales/Sales";
import Purchase from "./Views/Purchase/Purchase";
import CreditNote from "./Views/CreditNotes/CreditNote";
import DebitNote from "./Views/DebitNotes/DebitNotes";
import OnlineOrder from "./Views/Orders/OnlineOrders";
import OfflineOrder from "./Views/Orders/OfflineOrders";
import Report from "./Views/Report/Report";
import Transactions from "./Views/Transactions/Transactions";
import JournalTransactions from "./Views/JournalTransactions/JournalTransactions";
import Warehouse from "./Views/Warehouse/Warehouse";
import Workbook from "./Views/WorkBook/Workbook";
import ProductPricing from "./Views/ProductPricing/ProductPricing";
import Contact from "./Views/Contact/AllContact";
import Customer from "./Views/Contact/Customer";
import Supplier from "./Views/Contact/Supplier";
import Broker from "./Views/Contact/Broker";
import PurchaseChallan from "./Views/PurchaseChallan/PurchaseChallan";
import SalesOrder from "./Views/SalesOrder/SalesOrder";
import { setupToken } from "./Helper/AuthTokenHelper";
import Chats from "./Views/Chats/Chats";
import jwtDecode from "jwt-decode";
import { setCurrentUser } from "./Store/Actions/AuthAction";
import routes from "./Routes/routes";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import ForgotPassword from "./Views/Membership/ForgotPassword";
import ResetPassword from "./Views/Membership/ResetPassword";
import SelectOrganization from "./Views/Organization/SelectOrganization";

// const token = setupToken();
// if (token) {
//   const decoded = jwtDecode(token);
//   Store.dispatch(setCurrentUser(decoded));
// }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="forgot-password" element={<ForgotPassword />} />
          <Route
            exact
            path="Select-organization"
            element={<SelectOrganization />}
          />
          <Route exact path="reset-password" element={<ResetPassword />} />
          <Route exact path="/register" element={<Register />} />
          {/* <Route exact path="/addOrganization" element={<AddOrganization />} /> */}
          <Route
            exact
            path="/addOrganization"
            element={
              <ProtectedRoutes>
                <AddOrganization />
              </ProtectedRoutes>
            }
          />
          <Route exact path="/dashboard" element={<Dashboard />}>
            <Route exact path="addItem" element={<AddItem />} />
            <Route index path="overview" element={<Shortcuts />} />
            <Route
              exact
              path="BussinesOverview"
              element={<BussinesOverview />}
            />
            <Route exact path="*" element={<NotFound />} />
            <Route exact path="cash-bank" element={<CashBank />} />
            <Route exact path="sales" element={<Sales />} />
            <Route exact path="purchase" element={<Purchase />} />
            <Route exact path="reports" element={<Report />} />
            <Route exact path="warehouse" element={<Warehouse />} />
            <Route exact path="workbook" element={<Workbook />} />
            <Route exact path="contact/all" element={<Contact />} />
            <Route exact path="contact/broker" element={<Broker />} />
            <Route exact path="contact/supplier" element={<Supplier />} />
            <Route exact path="contact/customer" element={<Customer />} />
            <Route exact path="product-pricing" element={<ProductPricing />} />
            <Route exact path="transactions" element={<Transactions />} />
            <Route exact path="offline-orders" element={<OfflineOrder />} />
            <Route exact path="online-orders" element={<OnlineOrder />} />
            <Route exact path="debit-notes" element={<DebitNote />} />
            <Route exact path="credit-notes" element={<CreditNote />} />
            <Route
              exact
              path="journal-transactions"
              element={<JournalTransactions />}
            />
            <Route exact path="allContact" element={<AllContact />} />
            <Route
              exact
              path="purchase-challan"
              element={<PurchaseChallan />}
            />
            <Route exact path="sales-orders" element={<SalesOrder />} />
            <Route exact path="Chats" element={<Chats />} />
            {/* <Route
              exact
              path="/"
              element={loggedIn ? <Shortcuts /> : <Navigate replace to={"/"} />}
            /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// const routeComponents = routes.map((r, i) => {
//   if (r.private) return <ProtectedRoutes key={i} {...r} />;
//   return <Route key={i} {...r} />;
// });

// const App = () => {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route>
//             {routeComponents}
//             <Route exact path="/" element={<Login />} />
//             <Route exact path="/" element={<Login />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

export default App;
