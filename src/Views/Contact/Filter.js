import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import {
  Button,
  FlexDirYDiv,
  Label,
  RequiredSpan,
  SimpleButton,
  YCenterDiv,
} from "../../Components/Common";

const initialValues = {
  state: {},
};
const Filter = () => {
  const { handleSubmit, values, handleChange, handleBlur } = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <YCenterDiv className="m-1">
          <FlexDirYDiv>
            <div>
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <Label htmlFor="select-category">Gst Type</Label>
                <Select
                  size="small"
                  id="select-category"
                  name="select-category"
                  value={values.category}
                  onChange={handleChange}
                >
                  <MenuItem value={"LehangaCholi"}>Lehanga Choli</MenuItem>
                  <MenuItem value={"SalwarKameez"}>Salwar Kameez</MenuItem>
                  <MenuItem value={"Gown"}>Gown</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <Label htmlFor="select-category">State</Label>
                <Select
                  size="small"
                  id="select-category"
                  name="select-category"
                  value={values.category}
                  onChange={handleChange}
                >
                  <MenuItem value={"LehangaCholi"}>Lehanga Choli</MenuItem>
                  <MenuItem value={"SalwarKameez"}>Salwar Kameez</MenuItem>
                  <MenuItem value={"Gown"}>Gown</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="m-0">
              <FlexDirYDiv>
                <Label htmlFor="name">Name</Label>
                <TextField
                  id="name"
                  type="text"
                  // margin="normal"
                  name="name"
                  value={values.name}
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FlexDirYDiv>
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <Label htmlFor="select-category">State</Label>
                <Select
                  size="small"
                  id="select-category"
                  name="select-category"
                  value={values.category}
                  onChange={handleChange}
                >
                  <MenuItem value={"LehangaCholi"}>Lehanga Choli</MenuItem>
                  <MenuItem value={"SalwarKameez"}>Salwar Kameez</MenuItem>
                  <MenuItem value={"Gown"}>Gown</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <YCenterDiv>
                <SimpleButton>Save</SimpleButton>
                <SimpleButton>Clear</SimpleButton>
              </YCenterDiv>
            </div>
          </FlexDirYDiv>
        </YCenterDiv>
      </form>
    </div>
  );
};

export default Filter;
