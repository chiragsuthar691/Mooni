import { useDispatch } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import { isRoleAccess } from "../Services/BaseService";

const ProtectedRoutes = ({ component: Component, auth, setting, ...rest }) => {
  const dispatch = useDispatch();

  const handleAccess = (roleName) => {
    return dispatch(isRoleAccess(roleName));
  };

  let hasAccess = {
    is_read_access: true,
    is_write_access: true,
    is_delete_access: true,
  };
  if (rest.role) {
    hasAccess = handleAccess(rest.role);
  }

  return (
    // <Route
    //   {...rest}
    //   render={(props) => {
    //     return (
    //       <>
    //         {auth.isauthticated === true} ?
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
    <>
      {auth.isauthticated === true} ?
      <>
        {hasAccess?.is_read_access === true} ?
        <Component
          write_access={hasAccess?.is_write_access}
          delete_access={hasAccess?.is_delete_access}
          //   {...props}
        />
        :
        <Navigate to="access-denied" replace />
      </>
      <Navigate to="/" replace />
    </>
  );
};

export default ProtectedRoutes;
