import { TextField } from "@mui/material";
import {
  FlexBox,
  FullDiv,
  MediumButton,
  Nav,
  NavItem,
  NavItemsContainer,
  SpanLink,
} from "../../Components/Common";
import AddContact from "../Contact/AddContact";
import EmptyCardBox from "../../Assets/empty-cardboard-box.png";
import { useState } from "react";

const ProductPricing = () => {
  const [Contact, setContact] = useState(false);

  const handleContact = () => {
    setContact(!Contact);
  };

  return (
    <div>
      <Nav>
        <NavItem>
          <h1>Product Pricing</h1>
        </NavItem>
        <NavItemsContainer>
          <NavItem>
            <TextField
              id="serachlist"
              type="text"
              placeholder="Searchlist"
              size="small"
              // onChange={handleChange}
            />
          </NavItem>
          <NavItem>
            <MediumButton onClick={handleContact}>Add Item</MediumButton>
          </NavItem>
        </NavItemsContainer>
      </Nav>

      {Contact ? <AddContact /> : ""}
      <FullDiv className="mt-40">
        <FlexBox>
          <div>
            <img
              src={EmptyCardBox}
              alt={EmptyCardBox}
              className="emptycardbox"
            />
          </div>
          <h1>Add Your First Product</h1>
          <SpanLink onClick={handleContact}>Create New Item</SpanLink>
        </FlexBox>
      </FullDiv>
    </div>
  );
};

export default ProductPricing;
