import Home from "../Home";
import Dashboard from "../Views/Dashboard/Dashboard";
import DashboardOverview from "../Views/Dashboard/DashboardOverview";
import ForgotPassword from "../Views/Membership/ForgotPassword";
import Login from "../Views/Membership/Login";
import Register from "../Views/Membership/Register";
import ResetPassword from "../Views/Membership/ResetPassword";
import AddOrganization from "../Views/Organization/AddOrganization";
import SelectOrganization from "../Views/Organization/SelectOrganization";
import ProtectedRoutes from "./ProtectedRoutes";

/**
 * Routes Array
 * Same properties should match for all attributes
 */
const routes = [
  {
    path: "/login",
    exact: true,
    element: <Login />,
    private: false,
  },
  {
    path: "/register",
    exact: true,
    element: <Register />,
    private: false,
  },
  {
    path: "/forgot-password",
    exact: true,
    element: <ForgotPassword />,
    private: false,
  },
  {
    path: "/reset-password",
    exact: true,
    element: <ResetPassword />,
    private: false,
  },
  {
    path: "/addOrganization",
    exact: true,
    element: (
      <ProtectedRoutes>
        <AddOrganization />
      </ProtectedRoutes>
    ),
    private: true,
  },
  {
    path: "/select-organization",
    exact: true,
    element: (
      <ProtectedRoutes>
        <SelectOrganization />
      </ProtectedRoutes>
    ),
    private: true,
  },
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Dashboard />
      </ProtectedRoutes>
    ),
    private: true,
  },
];

export default routes;
