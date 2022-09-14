/* eslint-disable */
import React, {useContext} from "react";
import {ThemeContext} from "./themeContext";

const footer = () => {
  const {isDark, setIsDark} = useContext(ThemeContext);
  console.log('-------------------- footer')
  console.log('isDark >>> ', isDark)

  const toggleTheme= () => {
    setIsDark(!isDark);
  }
  return (
    <footer className="footer"
             style={{
               backgroundColor: isDark? 'black' : 'lightgray',
             }}
    >
      <button className="button" onClick={toggleTheme}>
        Dark Mode
      </button>
    </footer>
  );
};

export default footer;