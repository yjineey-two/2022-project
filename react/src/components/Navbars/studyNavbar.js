

import React from "react";
import { NavbarBrand } from "reactstrap";


function StudyNavbar() {
  return(
    <>
      <NavbarBrand
        data-placement="bottom"
        href="/index"
        title="HOME"
      ><i className="nc-icon nc-atom" />
      </NavbarBrand>

      <NavbarBrand
        data-placement="bottom"
        href="/custom"
        title="Custom"
        >
        Custom
      </NavbarBrand>

      <NavbarBrand
        data-placement="bottom"
        href="/use-Context"
        title="UseContext"
        >
        UseContext
      </NavbarBrand>

      <NavbarBrand
        data-placement="bottom"
        href="/use-callback"
        title="UseCallback"
        >
        UseCallback
      </NavbarBrand>


      <NavbarBrand
        data-placement="bottom"
        href="/use-memo"
        title="UseMemo"
        >
        UseMemo
      </NavbarBrand>

      <NavbarBrand
        data-placement="bottom"
        href="/use-ref"
        title="UseRef"
        >
        UseRef
      </NavbarBrand>

      <NavbarBrand
        data-placement="bottom"
        href="/use-reducer3"
        title="UseReducer3"
        >
        UseReducer3
      </NavbarBrand>

      <NavbarBrand
        data-placement="bottom"
        href="/use-reducer2"
        title="UseReducer2"
        >
        UseReducer2
      </NavbarBrand>

      <NavbarBrand
        data-placement="bottom"
        href="/use-reducer1"
        title="UseReducer1"
        >
        UseReducer1
      </NavbarBrand>

      <NavbarBrand
        data-placement="bottom"
        href="/use-effect"
        title="UseEffect"
        >
        UseEffect
      </NavbarBrand>

      <NavbarBrand
        data-placement="bottom"
        href="/use-state"
        title="UseState"
      >
        UseState
      </NavbarBrand>
    </>
  )
}

export default StudyNavbar;
