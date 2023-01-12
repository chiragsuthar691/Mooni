import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { isRoleAccess } from "../Services/BaseService";
import store from "../Store/Store";

const handleAccess = (roleName) => {
  store.dispatch(isRoleAccess(roleName));
};

const ProtectedRoutes = ({ children, role }, props) => {
  const authSelector = useSelector((state) => state.auth);
  const { isAuthenticated } = authSelector;

  // because isSelector will not give us updated state after mount
  // getState will give latest state
  const state = store.getState();
  console.log("state", state.setting);
  // console.log("role", props.role);

  let hasAccess = {
    is_read_access: true,
    is_write_access: true,
    is_delete_access: true,
  };

  // if (role) hasAccess = handleAccess(role);

  if (isAuthenticated === false) return <Navigate to="/login" replace />;
  else return children;
  // else {
  //   if (role === true) return children;
  //   else <Navigate to="/access-denied" replace />;
  // }
};

export default ProtectedRoutes;
