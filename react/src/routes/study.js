import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// pages
import Index from "views/index.js";
import UseState from "views/Study/useState.js";
import UseEffect from "views/Study/useEffect.js";
import UseReducer1 from "views/Study/useReducer1.js";
import UseReducer2 from "views/Study/useReducer2.js";
import UseReducer3 from "views/Study/useReducer3.js";
import UseRef from "views/Study/useRef.js";
import UseMemo from "views/Study/useMemo.js";
import UseCallback from "views/Study/useCallback.js";
import UseContext from "views/Study/useContext.js";
import Custom from "views/Study/custom.js";

function Routes() {
  return(
    // Switch : 여러개가 매칭되어도 맨 위의 <route> 한개만 보여준다, ex) path="/index" path="/" 일 경우 중복
    <Switch>
        <Route 
          path={["/", "/index"]}  
          render={(props) => <Index {...props} /> }
          exact={true} 
        />

        <Route
          path="/custom"
          render={(props) => <Custom {...props} />}
        />

        <Route
          path="/use-Context"
          render={(props) => <UseContext {...props} />}
        />

        <Route
          path="/use-callback"
          render={(props) => <UseCallback {...props} />}
        />

        <Route
          path="/use-memo"
          render={(props) => <UseMemo {...props} />}
        />

        <Route
          path="/use-ref"
          render={(props) => <UseRef {...props} />}
        />

        <Route
          path="/use-reducer3"
          render={(props) => <UseReducer3 {...props} />}
        />

        <Route
          path="/use-reducer2"
          render={(props) => <UseReducer2 {...props} />}
        />

        <Route
          path="/use-reducer1"
          render={(props) => <UseReducer1 {...props} />}
        />

        <Route
          path="/use-effect"
          render={(props) => <UseEffect {...props} />}
        />

        <Route
          path="/use-state"
          render={(props) => <UseState {...props} />}
        />

        <Redirect to="/"/>
      </Switch>
  );
}

export default Routes;