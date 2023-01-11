import { MediumButton, NavItem, NavItemsContainer } from "./Common";

const Nav = () => {
  return (
    <Nav>
      <NavItem></NavItem>
      <NavItemsContainer>
        <NavItem>
          <MediumButton>New Invoice</MediumButton>
        </NavItem>
        <NavItem>
          <MediumButton>New Invoice</MediumButton>
        </NavItem>
      </NavItemsContainer>
    </Nav>
  );
};

export default Nav;
