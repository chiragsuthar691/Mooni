import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordSchema } from "../../Schema/formSchema";
import {
  ErrorP,
  Form,
  MessageBox,
  StyledButton,
} from "../../Components/Common";
import logo from "../../Assets/Mooni.png";
import { forgotPassword } from "../../Services/authService";
import Loading from "../../Components/Loading";

const userData = {
  email: "",
};

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authSelector = useSelector((state) => state.auth);
  const { loading } = authSelector;
  const messageSelector = useSelector((state) => state.Message);
  const { res_message, clr_res_message } = messageSelector;

  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: userData,
      validationSchema: forgotPasswordSchema,
      onSubmit: (values) => {
        const user = {
          email: values.email?.trim(),
        };
        dispatch(forgotPassword(user));
      },
    });
  if (res_message) console.log("res_message", res_message);

  return (
    <div className="login">
      <div className="login-container">
        <Form onSubmit={handleSubmit}>
          {!res_message ? (
            <>
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
                {errors.email && touched.email && (
                  <ErrorP>{errors.email}</ErrorP>
                )}
              </div>
              <div>
                <StyledButton type="submit" disabled={loading}>
                  {loading ? <Loading /> : "Reset password"}
                </StyledButton>
              </div>
            </>
          ) : (
            <MessageBox>{[res_message]}</MessageBox>
          )}
        </Form>
        <div>
          <Link to="/" className="login-links">
            Go back to login
          </Link>
        </div>
        <div>
          <p className="copyright">Copyright @ 2022 - India</p>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
