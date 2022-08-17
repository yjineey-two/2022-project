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
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

// pages
import Index from "views/Index.js";
import ProfilePage from "views/index-sections/ProfilePage.js";
import NucleoIcons from "views/index-sections/NucleoIcons.js";
import Buttons from "views/index-sections/SectionButtons.js";
import Progress from "views/index-sections/SectionProgress.js";
import JavaScript from "views/index-sections/SectionJavaScript.js";
import RegisterPage from "views/index-sections/RegisterPage.js";

ReactDOM.render(
  <BrowserRouter>
  {/* Sitch : 여러개가 매칭되어도 맨 위의 <route> 한개만 보여준다, ex) path="/index" path="/" 일 경우 중복*/}
    <Switch>
      {/* <Route path="/index" render={(props) => <Index {...props} />} /> */}
      <Route 
        path={["/", "/index"]}  // component = {Index}
        render={(props) => <Index {...props} /> }
        exact={true}  // 컴포넌트가 중복하여 일치하는 현상 방지
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/buttons"
        render={(props) => <Buttons {...props} />}
      />
      <Route
        path="/Progress"
        render={(props) => <Progress {...props} />}
      />
      <Route
        path="/JavaScript"
        render={(props) => <JavaScript {...props} />}
      />
      <Route
        path="/register-page" // login
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to={["/", "/index"]} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
