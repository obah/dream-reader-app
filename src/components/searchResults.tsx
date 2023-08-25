import { useContext } from "react";
import { Id, ReadingListContext } from "../context/readingListContext";
import { BookData } from "../types";

type Props = {
  data: BookData;
};

function SearchResults({ data }: Props) {
  const { id, title, authors, subtitle, image } = data;

  const { addBook } = useContext(ReadingListContext);

  const addBookId = (id: Id) => (addBook ? addBook(id) : null);

  return (
    <>
      <div>{image ? <img src={image} alt="book thumbnail" /> : ""}</div>

      <h2>{title}</h2>
      <span>{subtitle}</span>
      <p>{authors}</p>
      <button onClick={() => addBookId(id)}>Add to List</button>
    </>
  );
}

export default SearchResults;
