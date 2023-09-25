import { NavLink } from "react-router-dom";
import { INavItems } from "../types";
import { Navbar } from "./navbar";
import "./styles/componentStyles.css";
import { useState } from "react";
import Logo from "../assets/images/logo_text.png";

type Styles = string;

const navItems: INavItems[] = [
  { name: "Home", href: "/", current: true },
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "About", href: "/about", current: false },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const openMenu = () => setMenuOpen(!menuOpen);

  let menuOpenStyle: Styles = "";
  menuOpen ? (menuOpenStyle = " open") : (menuOpenStyle = "");

  return (
    <header>
      <div className="header__container">
        <div className="header__container-title">
          <NavLink to="/">
            <img src={Logo} alt="dream reader" />
          </NavLink>
        </div>
        <div>
          <div className="menu-btn">
            <span
              className={"menu-btn__burger" + menuOpenStyle}
              onClick={openMenu}
            ></span>
          </div>
          <nav className={"navbar" + menuOpenStyle}>
            <ul className={"navbar__menu" + menuOpenStyle}>
              {navItems.map((item) => (
                <Navbar key={item.name} items={item} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
