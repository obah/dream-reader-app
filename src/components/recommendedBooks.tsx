import { recommendedBooks } from "../lib/recommendedBooksData";
import { BookData } from "../types";

function RecommendedBooks() {
  const booksData: BookData[] = recommendedBooks;

  return (
    <>
      <h1>Recommended Books For You</h1>
      <div>
        {booksData.map((book) => (
          <div key={book.id}></div>
        ))}
      </div>
    </>
  );
}

export default RecommendedBooks;
