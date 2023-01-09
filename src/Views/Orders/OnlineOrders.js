import { Tab, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
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
import AddContact from "../Contact/AddContact";
import Filter from "../Contact/Filter";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ListSharpIcon from "@mui/icons-material/ListSharp";

const OnlineOrder = () => {
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
  const displayOptions = () => {
    setShowOptions(!showOptions);
  };
  useClickAway(popupRef, () => {
    setIsFilter(false);
    setShowOptions(false);
  });

  return (
    <div>
      <Nav>
        <NavItem>
          <h1>Online Orders</h1>
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
              New Online Orders
            </MediumButton>
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
              <Tab label="Confirmed" />
            </Backtab>
          </WhiteDiv>
          <WhiteDiv>
            <Backtab>
              <Tab label="Precessed" />
            </Backtab>
          </WhiteDiv>
          <WhiteDiv>
            <Backtab>
              <Tab label="Ready to Ship" />
            </Backtab>
          </WhiteDiv>
          <WhiteDiv>
            <Backtab>
              <Tab label="Menifest" />
            </Backtab>
          </WhiteDiv>
          <WhiteDiv>
            <Backtab>
              <Tab label="RTO Menifest" />
            </Backtab>
          </WhiteDiv>
          <WhiteDiv>
            <Backtab>
              <Tab label="RTO Acknowledge" />
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
      {Contact ? <AddContact /> : ""}
      <FullDiv></FullDiv>
    </div>
  );
};

export default OnlineOrder;
