/* eslint-disable */
import React, {useContext} from "react";
import {ThemeContext} from "./themeContext";
import {UserContext} from "./userContext";

const Content = () => {
  const {isDark} = useContext(ThemeContext);
  const user = useContext(UserContext);
  console.log('-------------------- content')
  console.log('isDark >>> ', isDark)
  console.log('user >>> ', user)

  return (
    <div className="content"
            style={{
              backgroundColor: isDark? 'black' : 'lightgray',
              color: isDark? 'white': 'black'
            }}
    >
      <p>{user}님, 좋은 하루 되세요</p>
    </div>
  );
};

export default Content;