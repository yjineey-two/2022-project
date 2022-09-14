/* eslint-disable */
import React, {useContext} from "react";
import {ThemeContext} from "./themeContext";
import {UserContext} from "./userContext";

const header = () => {
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UserContext);
    console.log('-------------------- header')
    console.log('isDark >>> ', isDark)
    console.log('user >>> ', user)

    return (
        <header className="header"
            style={{
                backgroundColor: isDark? 'black' : 'lightgray',
                color: isDark? 'white': 'black'
            }}
        >
        <h1>Welcome {user}</h1>
        </header>
    );
};

export default header;