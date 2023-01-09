import { Tab } from "@mui/material";
import { useState } from "react";
import {
  Backtab,
  FirstBtn,
  MediumButton,
  Nav,
  NavItem,
  NavItemsContainer,
  SubNav,
  ToggleButton,
  WhiteDiv,
} from "../../Components/Common";

const CashBank = () => {
  const [addAccount, setAddAccount] = useState(false);

  const handleAddAccount = () => {
    setAddAccount(!addAccount);
  };
  return (
    <div>
      <Nav>
        <NavItem>
          <h1>Cash & Bank</h1>
        </NavItem>
        <NavItemsContainer>
          <NavItem>
            <MediumButton onClick={handleAddAccount}>Add Account</MediumButton>
          </NavItem>
        </NavItemsContainer>
      </Nav>
      <SubNav>
        <ToggleButton>
          <WhiteDiv>
            <FirstBtn>
              <Tab label="Uncategorized" />
            </FirstBtn>
          </WhiteDiv>
          <WhiteDiv>
            <Backtab>
              <Tab label="Categorized" />
            </Backtab>
          </WhiteDiv>
          <WhiteDiv>
            <Backtab>
              <Tab label="Excluded" />
            </Backtab>
          </WhiteDiv>
        </ToggleButton>
      </SubNav>
    </div>
  );
};

export default CashBank;
