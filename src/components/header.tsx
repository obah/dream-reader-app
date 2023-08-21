import { INavItems } from "../types";
import { Navbar } from "./navbar";

const navItems: INavItems[] = [
  { name: "Home", href: "/", current: true },
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "About", href: "/about", current: false },
];

export function Header() {
  return (
    <header>
      <div>Header</div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <Navbar items={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

// TODO 1. Add navbar here 2. Create a component that uses the header everywhere, like next's layout.js
