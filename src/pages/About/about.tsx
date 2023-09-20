import { Layout } from "../../components/layout";
import AboutImage from "../../assets/images/about-flare.png";
import "./styles/about.css";

export function About() {
  return (
    <Layout>
      <section className="about__section">
        <div className="about__section-image">
          <img src={AboutImage} alt="dream reader logo" />
        </div>
        <div className="about__section-top-text">
          <h1>What is Dream Reader?</h1>
          <div>
            <p>
              It is an application that help readers create a list of the books
              they are currently reading, have read or plan to read.
            </p>

            <p>
              The application is built on the Google Book Library and relies
              heavily on the <span>Google Book API</span>
            </p>

            <p>
              You can view the code here on{" "}
              <a
                href="https://github.com/obah/dream-reader-app"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
              . Any feedback or contribution is very much welcome
            </p>
          </div>
        </div>

        <div className="about__section-final-text">
          <h1>How can I use Dream Reader?</h1>
          <div>
            <p>
              Just search for the book you want to access, then add it to your
              Reading List.
            </p>

            <p>
              From there, you can view it on Google Books and if a free digital
              verison is availble, you can read it online or download it.
            </p>

            <p>You can also choose to remove a book from your Reading List.</p>

            <p>
              Finally, you do not need an account to use Dream Reader, your
              Reading List is stored locally but you need a Google account to
              use Google Books.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
