import { Layout } from "../../components/layout";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles/landing.css";

export function Landing() {
  return (
    <Layout>
      <section className="landing__section">
        <div className="landing__section-hero">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            Hello Reader,
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
              ease: "linear",
            }}
          >
            All your favorite books in one place - <br />
            <span>Dream Reader</span>{" "}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.8,
              ease: "linear",
            }}
          >
            <Link to={"/dashboard"}>
              Launch App <RxArrowTopRight className="button-icon" />
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.8,
              ease: "linear",
            }}
          >
            "Books are a uniquely portable magic."
            <br />
            <span>— Stephen King, On Writing: A Memoir of the Craft</span>
          </motion.p>
        </div>
      </section>
    </Layout>
  );
}
