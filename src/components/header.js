import React, {useContext} from "react"
import './header.css';
import Headroom from "react-headroom";
import StyleContext from "../contexts/StylesContext";
import ToggleSwitch from "./toggleSwitch/ToggleSwitch";


function Header() {
    const { isDark } = useContext(StyleContext);
    return (
        <Headroom>
            <header className={isDark ? "dark-menu header" : "header"}>
                <a href="/" className="logo" >
                    <span className="grey-color">&lt;</span>
                    <span className="logo-name"> sammy kirigha </span>
                    <span className="grey-color">/&gt;</span>
                </a>
                <input className= "menu-btn" type="checkbox" id="menu-btn" />
                <label
                    className="menu-icon"
                    htmlFor="menu-btn"
                    style = {{ color: "white" }}
                >
                    <span className={isDark ? "navicon navicon-dark":"navicon"}></span>
                </label>
                <ul className={isDark ? "dark-menu menu":"menu"}>
                    <li>
                        <a href="/skilss">Skills</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contacts">Contact me</a>
                    </li>
                    <li>
                        <a href="#">
                            <ToggleSwitch />
                        </a>
                    </li>
                </ul>
            </header>  
      </Headroom>

    );
}

export default Header;