import { Box, MenuItem, Select, Tab, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import {
  Backtab,
  DownRightMenu,
  FilterMenu,
  FirstBtn,
  FlexBox,
  FullDiv,
  Main,
  MediumButton,
  Nav,
  NavItem,
  NavItemsContainer,
  SpanLink,
  SubNav,
  ToggleButton,
  WhiteDiv,
} from "../../Components/Common";
import AddContact from "../Contact/AddContact";
import Filter from "../Contact/Filter";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import EmptyCardBox from "../../Assets/empty-cardboard-box.png";
import { Link, Outlet } from "react-router-dom";

const Workbook = () => {
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
          <h1>Workbook</h1>
        </NavItem>
        <NavItemsContainer>
          <NavItem>
            <p>Due in Days</p>
          </NavItem>
          <NavItem>
            <Box sx={{ width: 200 }}>
              <Select
                className="w-48"
                size="small"
                id="select-category"
                name="select-category"
                placeholder="3 days"
                //   defaultValue={"3 days"}
                //   value={values.category}
                // onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </Box>
          </NavItem>
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
            <MediumButton onClick={handleContact}>New Workbook</MediumButton>
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
              <Tab label="Processed" />
            </Backtab>
          </WhiteDiv>
        </ToggleButton>
      </SubNav>

      <Main>
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
            <h1>Add Your First Workbook</h1>
            <SpanLink onClick={handleContact}>Create New Workbook</SpanLink>
          </FlexBox>
        </FullDiv>
      </Main>
    </div>
  );
};

export default Workbook;
