/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// nodejs library that concatenates strings
import classnames from "classnames";

import React from "react";
import logo from 'icons/logo.svg';
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
            href="/home"
            title="HOME"
          ><i src={logo} className="App-logo" alt="logo" />
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            // target="_blank"
            title="HOME"
          ><i className="nc-icon nc-atom" />
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/profile-page"
            // target="_blank"
            title="Profile"
          >
            Profile
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/nucleo-icons"
            // target="_blank"
            title="Profile"
          >
            Icons
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/buttons"
            // target="_blank"
            title="Profile"
          >
            Buttons
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/Progress"
            // target="_blank"
            title="Profile"
          >
            Progress
          </NavbarBrand>
          <NavbarBrand
            data-placement="bottom"
            href="/JavaScript"
            // target="_blank"
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
