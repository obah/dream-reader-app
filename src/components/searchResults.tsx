import { useContext } from "react";
import { ReadingListContext } from "../context/readingListContext";
import { BookData, ReadingListData } from "../types";

type Props = {
  data: BookData;
};

function SearchResults({ data }: Props) {
  const { id, title, authors, subtitle, image } = data;

  const { addBook } = useContext(ReadingListContext);

  const bookData: ReadingListData = { id, authors, title, image };

  const addBookId = (book: ReadingListData) => (addBook ? addBook(book) : null);

  return (
    <>
      <div>
        <img src={image} alt="book thumbnail" />
      </div>

      <h2>{title}</h2>
      <span>{subtitle}</span>
      <p>{authors}</p>
      <button onClick={() => addBookId(bookData)}>Add to List</button>
    </>
  );
}

export default SearchResults;
