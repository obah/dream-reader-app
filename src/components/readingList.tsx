import { useContext } from "react";
import { Id, ReadingListContext } from "../context/readingListContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function ReadingList() {
  const { bookList, removeBook } = useContext(ReadingListContext);

  const removeBookId = (id: Id) => (removeBook ? removeBook(id) : null);

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, transform: "translateY(100px)" },
    show: { opacity: 1, transform: "none" },
  };

  return (
    <>
      <h1 className="rl__header">My Personal Reading List</h1>
      <div>
        <div>
          {bookList && (
            <motion.div
              className="rl__collection"
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              {bookList.map((item) => (
                <motion.div
                  key={item.id}
                  className="rl__item"
                  variants={itemVariants}
                >
                  <motion.div
                    className="rl__item-wrapper"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="image-wrapper">
                      <img src={item.image} alt="Book thumbnail" />
                    </div>
                    <h2>{item.title}</h2>
                    <div className="rl__buttons">
                      <a
                        href={`${item.previewLink}`}
                        target="_blank"
                        rel="noopener"
                      >
                        Preview
                      </a>
                      <button onClick={() => removeBookId(item.id)}>
                        Remove
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        <div className="rl__last-text">
          {bookList?.length === 0 ? (
            <p>No books in your reading list yet</p>
          ) : (
            <p>Happy reading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ReadingList;
