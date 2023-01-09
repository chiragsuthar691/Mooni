import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import {
  FlexDirYDiv,
  FullScreenModal,
  InlineLine,
  Label,
  MediumButton,
  ModalBody,
  ModalHeader,
  RequiredSpan,
  Span,
  StyledButton,
  YCenterDiv,
  NavItemsContainer,
  FlexDiv,
  Main,
  CustomDropZone,
  Gallery,
  GalleryItem,
  GalleryMainItem,
  GalleryItems,
} from "../../Components/Common";
import Dropzone from "react-dropzone";
import FileResizer from "react-image-file-resizer";
import { setInventoryGalleryData } from "../../Store/Actions/InventoryAction";
import { useDispatch, useSelector } from "react-redux";
import { replaceWhiteSpaceWithDash } from "../../Helper/Common";

// const initialValues = { name: "", category: "", gallery: [] };

const AddInventory = (props) => {
  const dispatch = useDispatch();
  const inventorySelector = useSelector((state) => state.Inventory);
  const { inventoryItem } = inventorySelector;

  const { handleBlur, handleChange, handleSubmit, onBlur, errors, values } =
    useFormik({
      initialValues: inventoryItem,
      onSubmit: (values) => {
        console.log("values", values);
      },
    });

  const handleSave = () => {};

  const handleChangeImage = async (e) => {
    const file = e.target.file;
    await fileResizer(file);
  };

  const handleOnDrop = async (accepted, rejected) => {
    const file = accepted[0];
    await fileResizer(file);
  };

  const fileResizer = async (file) => {
    new Promise((resolve) => {
      FileResizer.imageFileResizer(
        file, // file object
        540, // width
        960, //  height
        "JPEG", // format to convert to.
        60, // quality of the image from 0 to 100.
        0, //  rotation of the image.
        (uri) => {
          //a function for getting the new image URI.
          resolve(uri);
          readFile(file, uri);
        },
        "base64", //is the format.
        270, //  min-width (optional)
        480 //  height (optional)
      );
    });
  };

  const readFile = (file, url) => {
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let imageDetail = reader.result;
      if (imageDetail) {
        let urlSplit = url.split(",");
        let splitData = imageDetail.split(",");
        if (urlSplit.length > 1) url = urlSplit[1];
        if (splitData.length > 1) imageDetail = splitData[1];
        const upload = {
          name: replaceWhiteSpaceWithDash(file.name),
          type: file.type,
          file: url,
        };
        dispatch(setInventoryGalleryData(upload));
      }
    };
  };

  return (
    <FullScreenModal>
      <ModalHeader>
        Add Inventory
        <NavItemsContainer>
          <MediumButton onClick={handleSave}>Save</MediumButton>
          <CloseIcon onClick={props.handleClose} className="ml-1" />
        </NavItemsContainer>
      </ModalHeader>
      <ModalBody>
        <div className="m-1">
          <Span>Product Details</Span>
          <InlineLine />
        </div>
        <form onSubmit={handleSubmit}>
          <YCenterDiv className="m-1">
            <div className="m-0">
              <FlexDirYDiv>
                <Label htmlFor="name">
                  Name
                  <RequiredSpan>*</RequiredSpan>
                </Label>
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
              <FormControl sx={{ m: 1, minWidth: 250 }}>
                <Label htmlFor="select-category">
                  Select Category
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <Select
                  defaultValue=""
                  size="small"
                  id="select-category"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                >
                  <MenuItem value={0}>Lehanga Choli</MenuItem>
                  <MenuItem value={1}>Salwar Kameez</MenuItem>
                  <MenuItem value={2}>Gown</MenuItem>
                </Select>
              </FormControl>
            </div>
          </YCenterDiv>
          <YCenterDiv className="m-1">
            <div>
              <FormControl sx={{ m: 1, minWidth: 250 }}>
                <Label htmlFor="hsn-code">
                  HSN Code
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <Select
                  defaultValue=""
                  size="small"
                  id="hsn-code"
                  name="hsn_code"
                  value={values.hsn_code}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 250 }}>
                <Label htmlFor="tax-rate-slab">
                  Tax Rate Slab
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <Select
                  defaultValue=""
                  size="small"
                  id="tax-rate-slab"
                  name="tax_rate_slab"
                  value={values.tax_rate_slab}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <FormControl sx={{ m: 1, minWidth: 250 }}>
                <Label htmlFor="price-tax-type">
                  Price Tax Type
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <Select
                  defaultValue=""
                  size="small"
                  id="price-tax-type"
                  name="price_tax_type"
                  value={values.price_tax_type}
                  onChange={handleChange}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </YCenterDiv>
          <YCenterDiv className="m-1">
            <div className="m-0">
              <FlexDirYDiv>
                <Label htmlFor="sku">
                  SKU
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <TextField
                  id="sku"
                  type="text"
                  // margin="normal"
                  name="sku"
                  value={values.sku}
                  size="small"
                  placeholder="RH3274-PS"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FlexDirYDiv>
            </div>
            <div className="m-0">
              <FlexDirYDiv>
                <Label htmlFor="purchase-sku">
                  Purchase SKU
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <TextField
                  id="purchase-sku"
                  type="text"
                  // margin="normal"
                  name="purchase_sku"
                  value={values.purchase_sku}
                  size="small"
                  placeholder="R23TD4-PS"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FlexDirYDiv>
            </div>
            <div className="m-0">
              <FlexDirYDiv>
                <Label htmlFor="barcode">
                  Barcode
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <TextField
                  id="barcode"
                  type="text"
                  // margin="normal"
                  name="barcode"
                  value={values.barcode}
                  size="small"
                  placeholder="1234567890"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FlexDirYDiv>
            </div>
          </YCenterDiv>
          <YCenterDiv>
            <Box sx={{ ml: 3 }}>
              <FormControlLabel
                margin="normal"
                control={<Checkbox defaultChecked />}
                label="Track Inventory For This Item"
              />
            </Box>
          </YCenterDiv>
          <YCenterDiv>
            <Box sx={{ ml: 3 }}>
              <FormControlLabel
                margin="normal"
                control={<Checkbox defaultChecked />}
                label="Low Inventory Alert"
              />
            </Box>
          </YCenterDiv>
          <Box sx={{ ml: 3 }}>
            <YCenterDiv>
              <div>
                <FlexDirYDiv>
                  <Label htmlFor="price-tax-type">
                    Price Tax Type
                    <RequiredSpan>*</RequiredSpan>
                  </Label>

                  <TextField
                    id="price-tax-type"
                    type="text"
                    // margin="normal"
                    name="price_tax_type"
                    value={values.price_tax_type}
                    size="small"
                    placeholder="Low Stocks"
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </FlexDirYDiv>
              </div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 250 }}>
                  <Label htmlFor="select-supplier">
                    Select Supplier
                    <RequiredSpan>*</RequiredSpan>
                  </Label>
                  <Select
                    defaultValue=""
                    size="small"
                    id="select-supplier"
                    name="supplier"
                    placeholder="Select Supplier"
                    value={values.supplier}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>No options</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <YCenterDiv>
                  <StyledButton disabled>Make Primary</StyledButton>
                  <AddCircleOutlineIcon />
                </YCenterDiv>
              </div>
            </YCenterDiv>
          </Box>
          <YCenterDiv className="m-1">
            <div className="ml-1 fullwidth">
              <FlexDirYDiv>
                <Label htmlFor="select-category">Notes</Label>
                <TextField
                  fullWidth
                  id="note"
                  label="Note"
                  multiline
                  rows={3}
                />
              </FlexDirYDiv>
            </div>
          </YCenterDiv>
          <div className="m-1">
            <Span>Item Option</Span>
            <InlineLine />
          </div>
          <YCenterDiv className="m-1">
            <div className="m-0">
              <FlexDirYDiv>
                <Label htmlFor="selling-price">
                  Selling price
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <TextField
                  id="selling-price"
                  type="text"
                  name="selling_price"
                  placeholder="₹"
                  value={values.selling_price}
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FlexDirYDiv>
            </div>
            <div className="m-0">
              <FlexDirYDiv>
                <Label htmlFor="supplier-price">
                  Supplier price
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <TextField
                  id="supplier-price"
                  type="text"
                  name="supplier_price"
                  placeholder="₹"
                  value={values.supplier_price}
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FlexDirYDiv>
            </div>
          </YCenterDiv>
          <YCenterDiv className="m-1">
            <FlexDirYDiv>
              <div>
                <FormControl sx={{ m: 1, minWidth: 250 }}>
                  <Label htmlFor="catelogue">
                    Catelogue
                    <RequiredSpan>*</RequiredSpan>
                  </Label>
                  <Select
                    defaultValue=""
                    size="small"
                    id="catelogue"
                    name="catelogue"
                    placeholder="Select Catelogue"
                    value={values.catelogue}
                    onChange={handleChange}
                  >
                    <MenuItem value={""}>1</MenuItem>
                    <MenuItem value={""}>2</MenuItem>
                    <MenuItem value={""}>3</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </FlexDirYDiv>
            <FlexDirYDiv>
              <div>
                <FormControl sx={{ m: 1, minWidth: 250 }}>
                  <Label htmlFor="tags">
                    Tags
                    <RequiredSpan>*</RequiredSpan>
                  </Label>
                  <Select
                    defaultValue=""
                    size="small"
                    id="tags"
                    name="tags"
                    placeholder="Select Tags"
                    value={values.tags}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>No options</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </FlexDirYDiv>
            <FlexDirYDiv>
              <div>
                <FormControl sx={{ m: 1, minWidth: 250 }}>
                  <Label htmlFor="packing-bag-size">
                    Packing Bag Size
                    <RequiredSpan>*</RequiredSpan>
                  </Label>
                  <Select
                    defaultValue=""
                    size="small"
                    id="packing-bag-size"
                    name="packing_bag_size"
                    placeholder="Packing Bag Size"
                    value={values.packing_bag_size}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>No options</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </FlexDirYDiv>
          </YCenterDiv>
          <div className="m-1">
            <Span>Size</Span>
            <InlineLine />
          </div>
          <YCenterDiv className="m-1">
            <div className="m-0">
              <FlexDirYDiv>
                <Label htmlFor="weight">
                  Weight
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <TextField
                  id="weight"
                  type="text"
                  name="weight"
                  placeholder="₹"
                  value={values.weight}
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FlexDirYDiv>
            </div>
            <div className="m-0">
              <FlexDirYDiv>
                <Label htmlFor="dimensions">
                  Dimensions
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <TextField
                  id="dimensions"
                  type="text"
                  name="dimensions"
                  placeholder="₹"
                  value={values.dimensions}
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FlexDirYDiv>
            </div>
          </YCenterDiv>
          <YCenterDiv className="m-1">
            <div className="m-0">
              <FlexDirYDiv>
                <Label htmlFor="length">
                  Length
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <TextField
                  id="length"
                  type="text"
                  name="length"
                  placeholder="₹"
                  value={values.length}
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FlexDirYDiv>
            </div>
            <div className="m-0">
              <FlexDirYDiv>
                <Label htmlFor="breadth">
                  Breadth
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <TextField
                  id="breadth"
                  type="text"
                  name="breadth"
                  placeholder="₹"
                  value={values.breadth}
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FlexDirYDiv>
            </div>
            <div className="m-0">
              <FlexDirYDiv>
                <Label htmlFor="height">
                  Height
                  <RequiredSpan>*</RequiredSpan>
                </Label>
                <TextField
                  id="height"
                  type="text"
                  name="height"
                  placeholder="₹"
                  value={values.height}
                  size="small"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FlexDirYDiv>
            </div>
          </YCenterDiv>
          <YCenterDiv className="m-1">
            <div className="m-0">
              <FlexDiv>
                <FlexDirYDiv>
                  <div>
                    <Span>Item Gallery</Span>
                    <RequiredSpan>*</RequiredSpan>
                  </div>
                  <Main className="mt-1">
                    <Dropzone
                      accept={{
                        "image/jpeg": [".jpg", ".jpeg"],
                        "image/png": [".png"],
                      }}
                      onDrop={(accepted, rejected) =>
                        handleOnDrop(accepted, rejected)
                      }
                    >
                      {({ getRootProps, getInputProps, acceptedFiles }) => {
                        return (
                          <CustomDropZone
                            {...getRootProps({ className: "dropzone" })}
                          >
                            <label className="btn">
                              Drag Image(s) here or Browse images You can add up
                              to 15 images, each not exceeding 5MB.
                            </label>
                            <input
                              {...getInputProps()}
                              style={{ display: "none" }}
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleChangeImage(e)}
                              required
                            />
                          </CustomDropZone>
                        );
                      }}
                    </Dropzone>
                    <Gallery>
                      {inventoryItem.gallery &&
                        inventoryItem.gallery.length > 0 && (
                          <>
                            <GalleryMainItem>
                              <img
                                src={inventoryItem.gallery[0].file}
                                alt="gallery"
                              />
                            </GalleryMainItem>
                            <GalleryItems>
                              <GalleryItem>
                                <img
                                  src={inventoryItem.gallery[1].file}
                                  alt="gallery"
                                />
                              </GalleryItem>
                              <GalleryItem>
                                <img
                                  src={inventoryItem.gallery[2].file}
                                  alt="gallery"
                                />
                              </GalleryItem>
                            </GalleryItems>
                          </>
                        )}
                    </Gallery>
                  </Main>
                </FlexDirYDiv>
              </FlexDiv>
            </div>
          </YCenterDiv>
        </form>
      </ModalBody>
    </FullScreenModal>
  );
};

export default AddInventory;
