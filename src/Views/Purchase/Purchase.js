import { TextField } from "@mui/material";
import {
  DownRightMenu,
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
import EmptyCardBox from "../../Assets/empty-cardboard-box.png";
import Filter from "../Contact/Filter";

const Purchase = () => {
  const popupRef = useRef(null);
  const [isFilter, setIsFilter] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [Contact, setContact] = useState(false);

  const displayFilterMenu = () => {
    setIsFilter(!isFilter);
  };

  const handleContact = () => {
    setContact(!Contact);
  };

  useClickAway(popupRef, () => {
    setIsFilter(false);
    setShowOptions(false);
  });

  return (
    <div>
      <Nav>
        <NavItem>
          <h1>Purchase</h1>
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
          <NavItem>
            <MediumButton onClick={handleContact}>New Invoice</MediumButton>
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
      {showOptions ? (
        <DownRightMenu>
          <ul>
            <li>Import</li>
            <li>Export</li>
            <li>Void Contacts</li>
          </ul>
        </DownRightMenu>
      ) : (
        ""
      )}
      {Contact ? "" : ""}
      <FullDiv>
        <FlexBox>
          <div>
            <img
              src={EmptyCardBox}
              alt={EmptyCardBox}
              className="emptycardbox"
            />
          </div>
          <h1>Add Your First Purchase Invoice</h1>
          <SpanLink onClick={handleContact}>
            Create New Purchase Invoice
          </SpanLink>
        </FlexBox>
      </FullDiv>
    </div>
  );
};

export default Purchase;
