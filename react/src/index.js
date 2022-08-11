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
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Buttons from "views/index-sections/SectionButtons.js";
import Navbars from "views/index-sections/SectionNavbars.js";
import Navigation from "views/index-sections/SectionNavigation.js";
import Progress from "views/index-sections/SectionProgress.js";
import Notifications from "views/index-sections/SectionNotifications.js";
import Typography from "views/index-sections/SectionTypography.js";
import JavaScript from "views/index-sections/SectionJavaScript.js";
import Carousel from "views/index-sections/SectionCarousel.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/buttons"
        render={(props) => <Buttons {...props} />}
      />
      <Route
        path="/Navbars"
        render={(props) => <Navbars {...props} />}
      />
      <Route
        path="/Navigation"
        render={(props) => <Navigation {...props} />}
      />
      <Route
        path="/Progress"
        render={(props) => <Progress {...props} />}
      />
      <Route
        path="/Notifications"
        render={(props) => <Notifications {...props} />}
      />
      <Route
        path="/Typography"
        render={(props) => <Typography {...props} />}
      />
      <Route
        path="/JavaScript"
        render={(props) => <JavaScript {...props} />}
      />
      <Route
        path="/Carousel"
        render={(props) => <Carousel {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
