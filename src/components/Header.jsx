import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from 'reactstrap';
import { BsPersonSquare } from 'react-icons/bs';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/" className="p-3">
          LOGO
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavbarBrand href="/user" className="m-3">
              <BsPersonSquare size="2rem" /> Username
            </NavbarBrand>
            <NavItem>
              <NavLink href="/" className="m-3">
                Se déconnecter
              </NavLink>
            </NavItem>
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Rides
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Ride 1</DropdownItem>
                <DropdownItem>Ride 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText className="font-weight-bold p-3">PIN MY RIDE</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
