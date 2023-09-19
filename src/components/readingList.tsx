import { useContext } from "react";
import { ReadingListContext } from "../context/readingListContext";
import StaggeredAnimation from "./staggeredAnimation";
import Card from "./card";

function ReadingList() {
  const { bookList } = useContext(ReadingListContext);

  return (
    <>
      <h1 className="rl__header">My Personal Reading List</h1>
      <div>
        <div>
          {bookList && (
            <StaggeredAnimation classname="rl__collection">
              {bookList.map((item) => (
                <Card data={item} role="favorites" key={item.id} />
              ))}
            </StaggeredAnimation>
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
