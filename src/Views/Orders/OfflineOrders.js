import { Tab, TextField } from "@mui/material";
import {
  Backtab,
  DownRightMenu,
  FilterMenu,
  FirstBtn,
  FullDiv,
  MediumButton,
  Nav,
  NavItem,
  NavItemsContainer,
  SubNav,
  ToggleButton,
  WhiteDiv,
} from "../../Components/Common";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ListSharpIcon from "@mui/icons-material/ListSharp";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import Filter from "../Contact/Filter";

const OfflineOrder = () => {
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
          <h1>Offline Orders</h1>
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
              New Offline Order
            </MediumButton>
          </NavItem>
          <NavItem>
            <MediumButton onClick={addBroker}>Pickup List</MediumButton>
          </NavItem>
          <NavItem onClick={displayOptions} ref={popupRef}>
            <ListSharpIcon />
          </NavItem>
        </NavItemsContainer>
      </Nav>
      <SubNav>
        <ToggleButton>
          <WhiteDiv>
            <FirstBtn>
              <Tab label="Pending" />
            </FirstBtn>
          </WhiteDiv>
          <WhiteDiv>
            <Backtab>
              <Tab label="Precessed" />
            </Backtab>
          </WhiteDiv>
          <WhiteDiv>
            <Backtab>
              <Tab label="Cancelled" />
            </Backtab>
          </WhiteDiv>
          <WhiteDiv>
            <Backtab>
              <Tab label="All" />
            </Backtab>
          </WhiteDiv>
        </ToggleButton>
      </SubNav>

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
      {Broker ? "" : ""}
      <FullDiv></FullDiv>
    </div>
  );
};

export default OfflineOrder;
