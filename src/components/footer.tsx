import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo_text.png";

export function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__container-logo">
          <NavLink to="/">
            <img src={Logo} alt="dream reader logo" />
          </NavLink>
        </div>

        <div className="footer__container-text">
          &copy; 2023
          <p>
            Created by{" "}
            <a
              href="https://www.obaloluwa.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Obaloluwa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
