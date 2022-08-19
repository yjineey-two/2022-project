

import React from "react";
import { NavbarBrand } from "reactstrap";

function CommonNavbar() {
  return(
    <>
      <NavbarBrand
      data-placement="bottom"
      href="/index"
      // 새탭에서 열기
      // target="_blank"
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
        {/* <NavbarBrand
        data-placement="bottom"
          href="/nucleo-icons"
          title="Profile"
          >
          Icons
        </NavbarBrand> */}
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
      </>
    )
  }
  export default CommonNavbar;
