import { PropsWithChildren } from "react";
import { INavItems } from "../types";
import { NavLink } from "react-router-dom";

type Props = {
  items: INavItems;
};

export function Navbar({ items }: PropsWithChildren<Props>) {
  const { name, href }: INavItems = items;

  return (
    <>
      <li key={name} className="navbar__menu-item">
        <NavLink to={href}>{name}</NavLink>
      </li>
    </>
  );
}
