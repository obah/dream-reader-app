import { NavLink } from "react-router-dom";
import { INavItems } from "../types";
import { Navbar } from "./navbar";
import "./styles/componentStyles.css";

const navItems: INavItems[] = [
  { name: "Home", href: "/", current: true },
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "About", href: "/about", current: false },
];

export function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="header__title">
          <NavLink to="/">Dream Reader</NavLink>
        </div>
        <nav className="navbar">
          <button className="mobile-nav"></button>
          <ul className="navbar__items">
            {navItems.map((item) => (
              <Navbar items={item} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
