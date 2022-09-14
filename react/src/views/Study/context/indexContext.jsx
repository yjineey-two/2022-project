/* eslint-disable */
import React, {useState, useContext} from "react";
import {ThemeContext} from "./themeContext";
import {UserContext} from "./userContext";


const IndexContext = () => {
  const [isDark, setIsDark] = useState(false);
  console.log('-------------------- indexContext')
  return (
    <>
      // 어떻게 해결해야 할지 모르겠어
      <UserContext.Provider value={{isDark, setIsDark}}/>
    </>
  );
}

export default IndexContext;