import { Tab, TextField } from "@mui/material";
import {
  Backtab,
  FilterMenu,
  FirstBtn,
  FlexBox,
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
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import Filter from "../Contact/Filter";

const SalesOrder = () => {
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
          <h1>Sales Order</h1>
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
            <MediumButton onClick={handleContact}>New Sales Order</MediumButton>
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
        </ToggleButton>
      </SubNav>

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
          <h1>No Orders Found</h1>
        </FlexBox>
      </FullDiv>
    </div>
  );
};

export default SalesOrder;
