import { TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import {
  DownRightMenu,
  FilterMenu,
  FullDiv,
  MediumButton,
  Nav,
  NavItem,
  NavItemsContainer,
} from "../../Components/Common";
import AddContact from "../Contact/AddContact";
import Filter from "../Contact/Filter";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const DebitNote = () => {
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
          <h1>Debit Notes</h1>
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
            <MediumButton onClick={handleContact}>Debit Notes</MediumButton>
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
      <FullDiv></FullDiv>
    </div>
  );
};

export default DebitNote;
