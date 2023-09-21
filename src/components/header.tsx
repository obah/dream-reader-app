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
        <div className="header__container-title">
          <NavLink to="/">Dream Reader</NavLink>
        </div>
        <nav className="navbar">
          <button className="navbar-mobile"></button>
          <ul className="navbar__menu">
            {navItems.map((item) => (
              <Navbar key={item.name} items={item} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
