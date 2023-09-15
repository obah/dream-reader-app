import { useContext } from "react";
import { Id, ReadingListContext } from "../context/readingListContext";
import { BookData, ReadingListData } from "../types";
import useIdList from "./hooks/useIdList";

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
      <div className="dashboard__results-item">
        <div className="image-wrapper">
          <img src={image} alt="book thumbnail" />
        </div>
        <div className="search__text">
          <h2>{title}</h2>
          <p>{authors}</p>
        </div>
      </div>
      {listItems.includes(id) ? (
        <button onClick={() => removeBookId(id)}>Favorite</button>
      ) : (
        <button onClick={() => addBookId(bookData)}>Add to List +</button>
      )}
    </div>
  );
}

export default SearchResults;
