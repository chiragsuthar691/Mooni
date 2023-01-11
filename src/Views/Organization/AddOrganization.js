import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import {
  ErrorP,
  H2,
  InlineDiv,
  RequiredSpan,
  StyledButton,
} from "../../Components/Common";
import { Country, State, City } from "country-state-city";
import { useFormik } from "formik";
import { createOrgSchema } from "../../Schema/CreateOrgSchema";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrganization } from "../../Services/CompanyService";

const initialValues = {
  name: "",
  number: "",
  email: "",
  s_email: "",
  s_number: "",
  gst_number: "",
  pan_number: "",
  city: "",
  state: "",
  address: "",
  country: "",
  postal_code: "",
};

const AddOrganization = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleChange, values, errors, touched, handleSubmit } = useFormik({
    initialValues,
    validationSchema: createOrgSchema,
    onSubmit: (values) => {
      console.log("val", values);
      dispatch(createOrganization(values));
      navigate("/dashboard/overview");
    },
  });

  //dropdownlist for country, state, city
  const countries = Country.getAllCountries();
  const countryCode = values.country.isoCode;
  console.log("country", values.country);
  console.log("countryCode", countryCode);
  const states = State.getStatesOfCountry(countryCode);
  const stateCode = values.state.isoCode;
  const cities = City.getCitiesOfState(countryCode, stateCode);

  return (
    <div className="add-organization">
      <div className="org-container">
        <div>
          <H2>Add Organization</H2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="org-name">
              Organization Name<RequiredSpan>*</RequiredSpan>
              {errors.name && touched.name && <ErrorP>{errors.name}</ErrorP>}
            </label>
            <TextField
              size="small  "
              id="org-name"
              fullWidth
              margin="dense"
              name="name"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <InlineDiv>
            <Box
              sx={{
                width: 450,
                maxWidth: "100%",
              }}
            >
              <label htmlFor="org-mo-no">
                Mobile Number{"  "}
                {errors.number && touched.number && (
                  <ErrorP>{errors.number}</ErrorP>
                )}
              </label>
              <TextField
                size="small"
                fullWidth
                id="org-mo-no"
                margin="dense"
                name="number"
                onChange={handleChange}
                value={values.number}
              />
            </Box>
          </InlineDiv>
          <InlineDiv>
            <Box
              sx={{
                width: 450,
                maxWidth: "100%",
              }}
            >
              <label htmlFor="org-email">
                Email<RequiredSpan>*</RequiredSpan>
                {errors.email && touched.email && (
                  <ErrorP>{errors.email}</ErrorP>
                )}
              </label>
              <TextField
                size="small"
                fullWidth
                id="org-email"
                margin="dense"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </Box>
          </InlineDiv>
          <InlineDiv>
            <Box
              sx={{
                width: 450,
                maxWidth: "100%",
              }}
            >
              <label htmlFor="org-gstnumber">GST Number</label>{" "}
              {errors.gst_number && touched.gst_number && (
                <ErrorP>{errors.gst_number}</ErrorP>
              )}
              <TextField
                size="small"
                fullWidth
                id="org-gstnumber"
                margin="dense"
                name="gst_number"
                onChange={handleChange}
                value={values.gst_number}
              />
            </Box>
          </InlineDiv>
          <InlineDiv>
            <Box
              sx={{
                width: 450,
                maxWidth: "100%",
              }}
            >
              <label htmlFor="org-pannumber">
                PAN Number{" "}
                {errors.pan_number && touched.pan_number && (
                  <ErrorP>{errors.pan_number}</ErrorP>
                )}
              </label>
              <TextField
                size="small"
                fullWidth
                id="org-pannumber"
                margin="dense"
                name="pan_number"
                onChange={handleChange}
                value={values.pan_number}
              />
            </Box>
          </InlineDiv>
          <InlineDiv>
            <Box
              sx={{
                width: 450,
                maxWidth: "100%",
              }}
            >
              <label htmlFor="org-sm-num">
                Support Mobile Number
                {errors.s_number && touched.s_number && (
                  <ErrorP>{errors.s_number}</ErrorP>
                )}
              </label>
              <TextField
                size="small"
                fullWidth
                id="org-sm-num"
                margin="dense"
                name="s_number"
                onChange={handleChange}
                value={values.s_number}
              />
            </Box>
          </InlineDiv>
          <InlineDiv>
            <Box
              sx={{
                width: 450,
                maxWidth: "100%",
              }}
            >
              <label htmlFor="org-smail">
                Support Email
                {errors.s_email && touched.s_email && (
                  <ErrorP>{errors.s_email}</ErrorP>
                )}
              </label>
              <TextField
                size="small"
                fullWidth
                id="org-smail"
                margin="dense"
                name="s_email"
                onChange={handleChange}
                value={values.s_email}
              />
            </Box>
          </InlineDiv>
          <InlineDiv>
            <Box
              sx={{
                width: 450,
                maxWidth: "100%",
              }}
            >
              <label htmlFor="Address">
                Address
                {errors.address && touched.address && (
                  <ErrorP>{errors.address}</ErrorP>
                )}
              </label>
              <TextField
                size="small"
                id="Address"
                multiline
                rows={5}
                fullWidth
                margin="dense"
                name="address"
                onChange={handleChange}
                value={values.address}
              />
            </Box>
          </InlineDiv>
          <InlineDiv>
            <Box
              sx={{
                width: 450,
                maxWidth: "100%",
              }}
            >
              <label htmlFor="org-country">
                Country<RequiredSpan>*</RequiredSpan>
                {errors.country && touched.country && (
                  <ErrorP>{errors.country}</ErrorP>
                )}
              </label>
              <TextField
                id="org-country"
                fullWidth
                select
                margin="dense"
                name="country"
                // defaultValue={countries[0].name}
                // onChange={(e, country, z, x) => {
                //   console.log("e", e.target);
                //   console.log("country", country.target);
                //   console.log("country", country, "e", e, "z", z, "x", x);
                //   handleChange(country);
                //   setStates(State.getStatesOfCountry(country.isoCode));
                // }}
                onChange={handleChange}
                value={values.country}
              >
                {countries.map((option) => {
                  return (
                    <MenuItem
                      key={option.name}
                      value={option}
                      code={option.isoCode}
                    >
                      {option.name}
                    </MenuItem>
                  );
                })}
              </TextField>

              <label htmlFor="org-state">
                State<RequiredSpan>*</RequiredSpan>
                {errors.state && touched.state && (
                  <ErrorP>{errors.state}</ErrorP>
                )}
              </label>
              <TextField
                size="small"
                fullWidth
                select
                id="org-state"
                margin="dense"
                name="state"
                // defaultValue=""
                onChange={handleChange}
                value={values.state}
              >
                {states.map((option) => {
                  return (
                    <MenuItem key={option.name} value={option}>
                      {option.name}
                    </MenuItem>
                  );
                })}
              </TextField>

              <label htmlFor="org-city">
                City<RequiredSpan>*</RequiredSpan>
                {errors.city && touched.city && <ErrorP>{errors.city}</ErrorP>}
              </label>
              <TextField
                size="small"
                fullWidth
                id="org-city"
                margin="dense"
                name="city"
                // defaultValue=""
                select
                onChange={handleChange}
                value={values.city}
              >
                {cities.map((option) => {
                  return (
                    <MenuItem key={option.name} value={option.name}>
                      {option.name}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Box>
          </InlineDiv>
          <InlineDiv>
            <Box
              sx={{
                width: 450,
                maxWidth: "100%",
              }}
            >
              <label htmlFor="org-code">
                Postal Code{" "}
                {errors.postal_code && touched.postal_code && (
                  <ErrorP>{errors.postal_code}</ErrorP>
                )}
              </label>
              <TextField
                size="small"
                fullWidth
                id="org-code"
                margin="dense"
                name="postal_code"
                onChange={handleChange}
                value={values.postal_code}
              />
            </Box>
          </InlineDiv>
          <StyledButton type="submit">Add Organization</StyledButton>
        </form>
      </div>
    </div>
  );
};

export default AddOrganization;
