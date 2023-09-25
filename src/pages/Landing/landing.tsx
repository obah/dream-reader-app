import { Layout } from "../../components/layout";
import { RxArrowTopRight } from "react-icons/rx";
import BookShelf from "../../assets/images/book3.png";
import "./styles/landing.css";
import { Link } from "react-router-dom";

export function Landing() {
  return (
    <Layout>
      <section className="landing__section">
        <div className="landing__section-text">
          <h3>Hello Reader,</h3>
          <h1>
            All your favorite books in one place <br />
            <span>Dream Reader</span>{" "}
          </h1>

          <Link to={"/dashboard"}>
            Launch App <RxArrowTopRight className="button-icon" />
          </Link>

          <p>
            "Books are a uniquely portable magic."
            <br />
            <span>— Stephen King, On Writing: A Memoir of the Craft</span>
          </p>
        </div>

        <div className="landing__section-image">
          <img src={BookShelf} alt="a book shelf" />
        </div>
      </section>
    </Layout>
  );
}
