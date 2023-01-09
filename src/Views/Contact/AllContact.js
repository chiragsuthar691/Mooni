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
import AddContact from "./AddContact";
import AddBroker from "./AddBroker";
import Filter from "./Filter";
import EmptyCardBox from "../../Assets/empty-cardboard-box.png";

const Contact = () => {
  const popupRef = useRef(null);
  const [isFilter, setIsFilter] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [Contact, setContact] = useState(false);
  const [Broker, setBroker] = useState(false);

  const displayFilterMenu = () => {
    setIsFilter(!isFilter);
  };

  const displayOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleContact = () => {
    setContact(!Contact);
  };

  const addBroker = () => {
    setBroker(!Broker);
  };

  useClickAway(popupRef, () => {
    setIsFilter(false);
    setShowOptions(false);
  });

  return (
    <div>
      <Nav>
        <NavItem>
          <h1>Contacts</h1>
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
            <MediumButton onClick={handleContact}>Add Contact</MediumButton>
          </NavItem>
          <NavItem>
            <MediumButton onClick={addBroker}>Add Broker</MediumButton>
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
      {Broker ? <AddBroker /> : ""}
      <FullDiv className="mt-40">
        <FlexBox>
          <div>
            <img
              src={EmptyCardBox}
              alt={EmptyCardBox}
              className="emptycardbox"
            />
          </div>
          <h1>Add New Contact</h1>
          <SpanLink onClick={handleContact}>Create New Contact</SpanLink>
        </FlexBox>
      </FullDiv>
    </div>
  );
};

export default Contact;
