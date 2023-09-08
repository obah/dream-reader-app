import { useContext } from "react";
import { ReadingListContext } from "../context/readingListContext";
import { BookData, ReadingListData } from "../types";

type Props = {
  data: BookData;
};

function SearchResults({ data }: Props) {
  const { id, title, authors, image, previewLink } = data;

  const { addBook } = useContext(ReadingListContext);

  const bookData: ReadingListData = { id, authors, title, image, previewLink };

  const addBookId = (book: ReadingListData) => (addBook ? addBook(book) : null);

  return (
    <div className="search-result">
      <div className="search-item">
        <img src={image} alt="book thumbnail" />
        <div className="search__text">
          <h2>{title}</h2>
          <p>{authors}</p>
        </div>
      </div>
      <button onClick={() => addBookId(bookData)}>Add to List +</button>
    </div>
  );
}

export default SearchResults;
