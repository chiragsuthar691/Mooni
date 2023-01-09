import { TextField } from "@mui/material";
import {
  FilterMenu,
  FlexBox,
  FullDiv,
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

const Supplier = () => {
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
          <h1>Supplier</h1>
        </NavItem>
        <NavItemsContainer>
          <NavItem>
            <FilterAltIcon onClick={displayFilterMenu} />
          </NavItem>
          <NavItem>
            <TextField
              id="serachlist"
              type="text"
              placeholder="Searchlist"
              size="small"
              // onChange={handleChange}
            />
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
          <h1>Add New Supplier</h1>
          <SpanLink onClick={handleContact}>Create New Supplier</SpanLink>
        </FlexBox>
      </FullDiv>
    </div>
  );
};

export default Supplier;
