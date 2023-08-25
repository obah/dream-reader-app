import { useContext } from "react";
import { Id, ReadingListContext } from "../context/readingListContext";

function ReadingList() {
  const { bookList, removeBook } = useContext(ReadingListContext);

  const removeBookId = (id: Id) => (removeBook ? removeBook(id) : null);

  return (
    <>
      <h1>My Personal Reading List</h1>
      <div>
        <div>
          {bookList && (
            <div>
              {bookList.map((item) => (
                <div key={item}>
                  <p>{item}</p>
                  <button onClick={() => removeBookId(item)}>
                    Remove Book
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {bookList?.length === 0 ? (
            <p>No books in your reading list yet</p>
          ) : (
            <p>Happy reading</p>
          )}
        </div>
      </div>
    </>
  );
}

export default ReadingList;
