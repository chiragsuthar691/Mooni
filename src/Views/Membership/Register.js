import { useFormik } from "formik";
import { Button, ErrorP, Form, StyledButton } from "../../Components/Common";
import logo from "../../Assets/Mooni.png";
import { registerSchema } from "../../Schema/formSchema";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const userData = {
  name: "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =
    useFormik({
      initialValues: userData,
      validationSchema: registerSchema,
      onSubmit: (values) => {
        console.log("values", values);
      },
    });

  return (
    <div className="login">
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div>
            <TextField
              id="outlined-name-input"
              label="name"
              type="text"
              margin="dense"
              name="name"
              value={values.name}
              size="small"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.name && touched.name && <ErrorP>{errors.name}</ErrorP>}
          </div>
          <div>
            <TextField
              id="outlined-number-input"
              size="small"
              margin="dense"
              label="Number"
              type="number"
              name="number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.number && touched.number && (
              <ErrorP>{errors.number}</ErrorP>
            )}
          </div>
          <div>
            <TextField
              id="outlined-email-input"
              size="small"
              margin="dense"
              label="Email"
              type="email"
              name="email"
              value={values.email}
              autoComplete="current-email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <ErrorP>{errors.email}</ErrorP>}
          </div>
          <div>
            <TextField
              id="outlined-password-input"
              size="small"
              margin="dense"
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
            <TextField
              id="outlined-confirmPassword-input"
              size="small"
              margin="dense"
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <ErrorP>{errors.confirmPassword}</ErrorP>
            )}
          </div>
          <div>
            <StyledButton type="submit">Register</StyledButton>
          </div>
        </Form>
        <div>
          <Button>
            <Link to="/">have an account? Log in</Link>
          </Button>
        </div>
        <div>
          <p>Copyright @ 2022 - India</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
