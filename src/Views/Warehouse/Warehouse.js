import {
  FlexBox,
  FullDiv,
  MediumButton,
  Nav,
  NavItem,
  NavItemsContainer,
  SpanLink,
} from "../../Components/Common";
import { useState } from "react";
import EmptyCardBox from "../../Assets/empty-cardboard-box.png";

const Warehouse = () => {
  const [Contact, setContact] = useState(false);

  const handleContact = () => {
    setContact(!Contact);
  };

  return (
    <div>
      <Nav>
        <NavItem>
          <h1>Warehouse</h1>
        </NavItem>
        <NavItemsContainer>
          <NavItem>
            <MediumButton onClick={handleContact}>Add Warehouse</MediumButton>
          </NavItem>
        </NavItemsContainer>
      </Nav>
      <FullDiv className="mt-40">
        <FlexBox>
          <div>
            <img
              src={EmptyCardBox}
              alt={EmptyCardBox}
              className="emptycardbox"
            />
          </div>
          <h1>Add New Warehouse</h1>
          <SpanLink onClick={handleContact}>Create New Warehouse</SpanLink>
        </FlexBox>
      </FullDiv>
    </div>
  );
};

export default Warehouse;
