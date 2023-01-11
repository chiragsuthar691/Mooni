import { TextField } from "@mui/material";
import { Button, ErrorP, Form, StyledButton } from "../../Components/Common";
import logo from "../../Assets/Mooni.png";
import { useFormik } from "formik";
import { logInSchema } from "../../Schema/formSchema";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Services/authService";
import Loading from "../../Components/Loading";
import { APP_INIT_RESPONSE_TYPE } from "../../Global/Constant";
import UserPreferenceSingleton from "../../Helper/UserPrefenceSingleton";
import { useCallback, useEffect } from "react";
import store from "../../Store/Store";

const userData = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const companySelector = useSelector((state) => state.company);
  const { companylist } = companySelector;
  const stateSelector = useSelector((state) => state.auth);
  const { loading } = stateSelector;

  const submitHandle = useCallback(
    async (values) => {
      const user = {
        username: values.email?.trim(),
        password: values.password,
      };
      const appInItResult = await dispatch(login(user));
      console.log("appInItResult", appInItResult);
      if (
        appInItResult &&
        appInItResult.type === APP_INIT_RESPONSE_TYPE.REDIRECT
      ) {
        navigate(appInItResult.path);
      } else if (
        appInItResult &&
        appInItResult.type === APP_INIT_RESPONSE_TYPE.SUCCESS
      ) {
        const state = store.getState();
        const { company } = state;
        if (company?.companylist?.length >= 1) navigate("select-organization");
        else navigate("/");
        const companyId = UserPreferenceSingleton.getInstance().getCompanyId();
        if (companyId) {
          // dispatch(getUpdatedContactList(companyId));
          // dispatch(getItemsList(companyId));
        }
      }
    },
    [dispatch, navigate]
  );

  useEffect(() => {
    console.log("companylist", companylist, "companySelector", companySelector);
  }, [companySelector, companylist]);

  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: userData,
      validationSchema: logInSchema,
      onSubmit: submitHandle,
      enableReinitialize: true,
    });

  return (
    <div className="login">
      <div className="login-container">
        <Form onSubmit={handleSubmit}>
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div>
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              margin="normal"
              name="email"
              value={values.email}
              size="small"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && touched.email && <ErrorP>{errors.email}</ErrorP>}
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              size="small"
              margin="normal"
              label="Password"
              type="password"
              name="password"
              value={values.password}
              autoComplete="current-password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <ErrorP>{errors.password}</ErrorP>
            )}
          </div>

          <div>
            <StyledButton type="submit" disabled={loading}>
              Log In
            </StyledButton>
          </div>
        </Form>
        {loading ? <Loading /> : ""}
        <div>
          <Button>
            <Link to="/register">Create an account</Link>
          </Button>
        </div>
        <div>
          <Link to="forgot-password" className="login-links">
            Forgot password
          </Link>
          {/* <Link to="reset-password" className="login-links ml-1">
            Reset password
          </Link> */}
        </div>
        <div>
          <p className="copyright">Copyright @ 2022 - India</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
