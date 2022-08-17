/*!
=========================================================
* Jineey React - v1.0
* Start Date - 2022.08
=========================================================
*/

import classnames from "classnames";

import React from "react";
import 'styles/App.css';

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,

  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            // target="_blank" // 새탭에서 열기
            title="HOME"
          ><i className="nc-icon nc-atom" />
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/hook-page"
            title="Hook"
          >
            Hook
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/profile-page"
            title="Profile"
          >
            Profile
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/nucleo-icons"
            title="Profile"
          >
            Icons
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/buttons"
            title="Profile"
          >
            Buttons
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/Progress"
            title="Profile"
          >
            Progress
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/JavaScript"
            title="Profile"
          >
            JavaScript
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >

          <button
            aria-controls="navbarSupportedContent"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler navbar-toggler-right"
            data-target="#navbar-menu-icon"
            data-toggle="collapse"
            id="navbar-menu-icon"
            type="button"
          >
            <span className="navbar-toggler-bar" />
            <span className="navbar-toggler-bar" />
            <span className="navbar-toggler-bar" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-menu-icon">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  >
                  <i aria-hidden={true} className="nc-icon nc-email-85" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="/register-page"
                  title="REGISTER"
                >
                  <i
                    aria-hidden={true}
                    className="nc-icon nc-single-02"
                  />
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                  role="button"
                >
                  <i
                    aria-hidden={true}
                    className="nc-icon nc-settings-gear-65"
                  />
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem header tag="span">
                    Dropdown header
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Another action
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Something else here
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Separated link
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </UncontrolledCollapse>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
