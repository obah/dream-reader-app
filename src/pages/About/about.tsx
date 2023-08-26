import { Layout } from "../../components/layout";

export function About() {
  return (
    <Layout>
      <section className="about__section">
        <div className="about__top-text">
          <h1>What is Dream Reader?</h1>
          <p>
            It is a simple application to help readers create a list of the
            books they are currently reading, plan to read and have read
          </p>

          <p>
            The application is built on the Google Book Library and relies
            heavily on the Google Book API
          </p>
        </div>

        <div className="about__final-text">
          <h1>How can I use Dream Reader?</h1>
          <p>
            Just search for the book you want to access, then add it to your
            Reading List
          </p>

          <p>
            From there, you can view it on Google Books and if a free digital
            verison is availble, you can read it online or download it
          </p>

          <p>You can also choose to remove a book from your Reading List</p>

          <p>
            Finally, you do not need an account to use Dream Reader, your
            Reading List is stored locally but you need a Google account to use
            Google Books
          </p>
        </div>
      </section>
    </Layout>
  );
}
