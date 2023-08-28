import { Layout } from "../../components/layout";
import { RxArrowTopRight } from "react-icons/rx";

export function Landing() {
  return (
    <Layout>
      <section className="landing__section">
        <div className="landing__text">
          <div className="landing__top-text">
            <h3>Hello Reader,</h3>
            <h1>
              All your favorite books in one place <br />
              <span>Dream Reader</span>{" "}
            </h1>
          </div>

          <div className="landing__button">
            <button>
              Launch App <RxArrowTopRight />
            </button>
          </div>

          <div className="landing__final-text">
            <p>
              <i>
                "Books are a uniquely portable magic."
                <br />
                <span>— Stephen King, On Writing: A Memoir of the Craft</span>
              </i>
            </p>
          </div>
        </div>

        <div className="landing__image">
          {/* put the animated image here */}
        </div>
      </section>
    </Layout>
  );
}
