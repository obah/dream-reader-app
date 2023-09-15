import { useContext } from "react";
import { Id, ReadingListContext } from "../context/readingListContext";

function ReadingList() {
  const { bookList, removeBook } = useContext(ReadingListContext);

  const removeBookId = (id: Id) => (removeBook ? removeBook(id) : null);

  return (
    <>
      <h1 className="rl__header">My Personal Reading List</h1>
      <div>
        <div>
          {bookList && (
            <div className="rl__collection">
              {bookList.map((item) => (
                <div key={item.id} className="rl__item">
                  <div className="rl__item-wrapper">
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
                  </div>
                </div>
              ))}
            </div>
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
