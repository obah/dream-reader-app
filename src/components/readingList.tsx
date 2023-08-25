import { useContext } from "react";
import { Id, ReadingListContext } from "../context/readingListContext";

function ReadingList() {
  const { bookList, removeBook } = useContext(ReadingListContext);

  const removeBookId = (id: Id) => {
    if (removeBook) {
      removeBook(id);
    }
  };

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

// : (
// <p>No books in your reading list</p>
// )

export default ReadingList;
