import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../store/actions/DarkModeAction.js";

function Header () {

    const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled);
    const dispatch = useDispatch();

    return(
        <div className='toggle-container'>
          <span style={{ color : darkThemeEnabled ? "grey" : "yellow"}}>☼</span>
          <span className='toggle'>
            <input 
              checked={darkThemeEnabled}
              onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
              type="checkbox"
              className="checkbox"
              id="checkbox"
            />
            <label htmlFor="checkbox" />
          </span>
          <span style={{ color : darkThemeEnabled ? "slateblue" : "grey"}}>☽</span>
        </div>
    )
}
export default Header;