import { useContext } from "react";
import {
  BsBookmarkHeartFill,
  BsBookmarkPlus,
  BsBookmarkX,
} from "react-icons/bs";
import { BookData, ReadingListData } from "../types";
import { Id, ReadingListContext } from "../context/readingListContext";
import { motion } from "framer-motion";
import "./styles/componentStyles.css";

interface ICardProps {
  data: BookData;
  role: "default" | "favorites";
  favorite?: boolean;
}

function Card({ data, role, favorite }: ICardProps) {
  const { id, title, authors, image, previewLink } = data;

  const bookData: ReadingListData = { id, authors, title, image, previewLink };

  const { addBook, removeBook } = useContext(ReadingListContext);

  const addBookId = (book: ReadingListData) => (addBook ? addBook(book) : null);

  const removeBookId = (id: Id) => (removeBook ? removeBook(id) : null);

  const itemVariants = {
    hidden: { opacity: 0, transform: "translateY(100px)" },
    show: { opacity: 1, transform: "none" },
  };

  return (
    <motion.div className="card" variants={itemVariants}>
      <motion.div
        className={
          "card__wrapper " + (role === "favorites" ? "big-card" : "small-card")
        }
        whileHover={{ scale: 1.05 }}
      >
        <div className="card__wrapper-image">
          <img src={image} alt="book thumbnail" />
        </div>
        <div className="card__wrapper-text">
          <h2 className={role === "default" ? "clamped-title" : "full-title"}>
            {title}
          </h2>
          {role === "default" && <p>{authors}</p>}
        </div>
        <div className="card__wrapper-buttons">
          {role === "default" ? (
            <div className="default-btns">
              {favorite ? (
                <button onClick={() => removeBookId(id)} className="fav-btn">
                  <span>
                    Favorite <BsBookmarkHeartFill />
                  </span>
                  <span>
                    Remove <BsBookmarkX />
                  </span>
                </button>
              ) : (
                <button onClick={() => addBookId(bookData)} className="add-btn">
                  Add to List <BsBookmarkPlus />
                </button>
              )}
            </div>
          ) : (
            <div className="favorites-btns">
              <a href={`${previewLink}`} target="_blank" rel="noopener">
                Preview
              </a>
              <button onClick={() => removeBookId(id)}>Remove</button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Card;
