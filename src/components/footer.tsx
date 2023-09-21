import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__container-logo">
          <NavLink to="/">Dream Reader</NavLink>
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
