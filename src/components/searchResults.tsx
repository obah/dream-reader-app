import { useContext } from "react";
import { Id, ReadingListContext } from "../context/readingListContext";
import { BookData, ReadingListData } from "../types";
import useIdList from "./hooks/useIdList";
import {
  BsBookmarkHeartFill,
  BsBookmarkPlus,
  BsBookmarkX,
} from "react-icons/bs";
import { motion } from "framer-motion";

type Props = {
  data: BookData;
};

function SearchResults({ data }: Props) {
  const { id, title, authors, image, previewLink } = data;
  const { listItems } = useIdList();

  const { addBook, removeBook } = useContext(ReadingListContext);

  const bookData: ReadingListData = { id, authors, title, image, previewLink };

  const addBookId = (book: ReadingListData) => (addBook ? addBook(book) : null);

  const removeBookId = (id: Id) => (removeBook ? removeBook(id) : null);

  return (
    <div className="dashboard__results">
      <motion.div
        className="dashboard__results-item"
        whileHover={{ scale: 1.05 }}
      >
        <div className="image-wrapper">
          <img src={image} alt="book thumbnail" />
        </div>
        <div className="search__text">
          <h2>{title}</h2>
          <p>{authors}</p>
        </div>
        {listItems.includes(id) ? (
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
      </motion.div>
    </div>
  );
}

export default SearchResults;
