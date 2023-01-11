import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, useNavigate, useRoutes } from "react-router-dom";
import { isRoleAccess } from "../Services/BaseService";
import privateRoutes from "../Routes/routes";
import routes from "../Routes/routes";
import PropTypes from "prop-types";
import SelectOrganization from "../Views/Organization/SelectOrganization";

// const ProtectedRoutes = ({ element: Component, auth, setting, ...rest }) => {
const ProtectedRoutes = ({ children }) => {
  // console.log("Component", Component, auth, setting);
  // const handleAccess = (roleName) => {
  //   return dispatch(isRoleAccess(roleName));
  // };

  // let hasAccess = {
  //   is_read_access: true,
  //   is_write_access: true,
  //   is_delete_access: true,
  // };
  // if (rest.role) {
  //   hasAccess = handleAccess(rest.role);
  // }

  return children;
  // <Route
  //   {...rest}
  //   element={(props) => {
  //     return (
  //       <>
  //         {auth === true} ?
  //         <>
  //           {hasAccess?.is_read_access === true} ?
  //           <Component
  //             write_access={hasAccess?.is_write_access}
  //             delete_access={hasAccess?.is_delete_access}
  //             {...props}
  //           />
  //           :
  //           <Navigate to="access-denied" replace />
  //         </>
  //         <Navigate to="/" replace />
  //       </>
  //     );
  //   }}
  // />
};

// const ProtectedRoutes = ({ component: Component, setting, ...rest }) => {
// const ProtectedRoutes = () => {
// return element;
//   <Route
//     {...rest}
//     render={(props) => {
//       return (
//         <>
//           {isauthenticated === true} ?
//           <>
//             {hasAccess?.is_read_access === true} ?
//             <Component
//               write_access={hasAccess?.is_write_access}
//               delete_access={hasAccess?.is_delete_access}
//               {...props}
//             />
//             :
//             <Navigate to="access-denied" replace />
//           </>
//           <Navigate to="/" replace />
//         </>
//       );
//     }}
//   />
// );

// ProtectedRoutes.propTypes = {
//   auth: PropTypes.object.isRequired,
//   setting: PropTypes.object.isRequired,
// };

export default ProtectedRoutes;
