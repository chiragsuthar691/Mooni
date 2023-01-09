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
import ListSharpIcon from "@mui/icons-material/ListSharp";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import EmptyCardBox from "../../Assets/empty-cardboard-box.png";
import AddContact from "../Contact/AddContact";
import Filter from "../Contact/Filter";

const CreditNote = () => {
  const popupRef = useRef(null);
  const [isFilter, setIsFilter] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [Contact, setContact] = useState(false);

  const displayFilterMenu = () => {
    setIsFilter(!isFilter);
  };

  const displayOptions = () => {
    setShowOptions(!showOptions);
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
          <h1>Credit Note</h1>
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
            <MediumButton onClick={handleContact}>New Credit Note</MediumButton>
          </NavItem>
          <NavItem onClick={displayOptions} ref={popupRef}>
            <ListSharpIcon />
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
          <h1>Add New Credit Note</h1>
          <p>
            We don't want to boast too much, but sending amazing invoices and
            getting paid is easier than ever. Go ahead! Try it yourself.
          </p>
          <SpanLink onClick={handleContact}>Create New Credit Note</SpanLink>
        </FlexBox>
      </FullDiv>
    </div>
  );
};

export default CreditNote;
