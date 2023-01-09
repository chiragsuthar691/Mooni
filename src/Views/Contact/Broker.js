import {
  FilterMenu,
  FlexBox,
  FullDiv,
  MediumButton,
  Nav,
  NavItem,
  NavItemsContainer,
  SpanLink,
} from "../../Components/Common";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import Filter from "./Filter";
import EmptyCardBox from "../../Assets/empty-cardboard-box.png";

const Broker = () => {
  const popupRef = useRef(null);
  const [isFilter, setIsFilter] = useState(false);
  const [Contact, setContact] = useState(false);

  const displayFilterMenu = () => {
    setIsFilter(!isFilter);
  };

  useClickAway(popupRef, () => {
    setIsFilter(false);
  });

  const handleContact = () => {
    setContact(!Contact);
  };

  return (
    <div>
      <Nav>
        <NavItem>
          <h1>Broker</h1>
        </NavItem>
        <NavItemsContainer>
          <NavItem>
            <FilterAltIcon onClick={displayFilterMenu} />
          </NavItem>
          <NavItem>
            <MediumButton onClick={handleContact}>Add Broker</MediumButton>
          </NavItem>
        </NavItemsContainer>
      </Nav>

      {isFilter ? (
        <FilterMenu>
          <Filter />
        </FilterMenu>
      ) : (
        ""
      )}
      {Contact ? (
        <FilterMenu>
          <Filter />
        </FilterMenu>
      ) : (
        ""
      )}
      <FullDiv className="mt-40">
        <FlexBox>
          <div>
            <img
              src={EmptyCardBox}
              alt={EmptyCardBox}
              className="emptycardbox"
            />
          </div>
          <h1>Add New Broker</h1>
          <SpanLink onClick={handleContact}>Create New Broker</SpanLink>
        </FlexBox>
      </FullDiv>
    </div>
  );
};

export default Broker;
