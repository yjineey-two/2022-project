import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// pages
import Index from "views/Index.js";
import HookPage from "views/menu/HookPage.js";
import ProfilePage from "views/menu/ProfilePage.js";
import NucleoIcons from "views/menu/components/NucleoIcons.js";
import Buttons from "views/menu/SectionButtons.js";
import Progress from "views/menu/SectionProgress.js";
import JavaScript from "views/menu/SectionJavaScript.js";
import LoginPage from "views/login/index.js";

function Routes() {
  return(
      // Sitch : 여러개가 매칭되어도 맨 위의 <route> 한개만 보여준다, ex) path="/index" path="/" 일 경우 중복
    <Switch>
        {/* <Route path="/index" render={(props) => <Index {...props} />} /> */}
        <Route 
          path={["/", "/index"]}  
          // component = {Index}
          render={(props) => <Index {...props} /> }
          exact={true}  // 컴포넌트가 중복하여 일치하는 현상 방지
        />
        <Route
          path="/hook-page"
          render={(props) => <HookPage {...props} />}
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
          render={(props) => <LoginPage {...props} />}
        />
        <Redirect to="/"/>
      </Switch>
  );
}

export default Routes;