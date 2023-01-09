import * as Yup from "yup";

export const createOrgSchema = Yup.object({
  name: Yup.string().required(),
  number: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is required"),
  s_number: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .notOneOf([Yup.ref("number"), null], "The number should not be same")
    .required("A phone number is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  s_email: Yup.string()
    .email("Invalid email")
    .notOneOf([Yup.ref("email"), null], "The email should not be same")
    .required("Required"),
  gst_number: Yup.string()
    .matches(
      /(0[0-9]|1[1-9]|2[0-9]|3[0-7])[A-Z]{3}[CPHFATBLJG]{1}[A-Z]{1}\d{4}[A-Z]{1}\d{1}[A-Z0-9]{2}/g,
      "Pls provide proper Gst number"
    )
    .required("Required"),
  pan_number: Yup.string()
    .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/, "Pls provide proper Gst number")
    .required("Required"),
  city: Yup.string().required("Required"),
  // state: Yup.required("Required"),
  address: Yup.string().required("Required"),
  // country: Yup.required("Required"),
  postal_code: Yup.number()
    .typeError("That doesn't look like a postal code")
    .positive("A code can't start with a minus")
    .integer("A code can't include a decimal point")
    .min(6)
    .min(8)
    .required("A code is required"),
});

///(0[0-9]|1[1-9]|2[0-9]|3[0-7])[A-Z]{3}[CPHFATBLJG]{1}[A-Z]{1}\d{4}[A-Z]{1}\d{1}[A-Z0-9]{2}/g for gst
/// = "[A-Z]{5}[0-9]{4}[A-Z]{1}"; pan
// 07AAGFF2194N1Z1 gst dummy
// ABCTY1234D pan dummy
