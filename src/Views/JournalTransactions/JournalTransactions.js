import { TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
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
import AddBroker from "../Contact/AddBroker";
import AddContact from "../Contact/AddContact";
import Filter from "../Contact/Filter";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import EmptyCardBox from "../../Assets/empty-cardboard-box.png";

const JournalTransactions = () => {
  const popupRef = useRef(null);
  const [isFilter, setIsFilter] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [Contact, setContact] = useState(false);
  const [Broker, setBroker] = useState(false);

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
          <h1>Journal Transactions</h1>
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
            <MediumButton onClick={handleContact}>
              Add Transactions
            </MediumButton>
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
          <h1>Add New Transactions</h1>
          <SpanLink onClick={handleContact}>Create New Transactions</SpanLink>
        </FlexBox>
      </FullDiv>
    </div>
  );
};

export default JournalTransactions;
