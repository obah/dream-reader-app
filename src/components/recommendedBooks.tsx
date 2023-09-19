import { recommendedBooks } from "../lib/recommendedBooksData";
import { BookData } from "../types";
import Card from "./card";
import useIdList from "./hooks/useIdList";
import StaggeredAnimation from "./staggeredAnimation";

function RecommendedBooks() {
  const { listItems } = useIdList();
  const booksData: BookData[] = recommendedBooks;

  return (
    <div>
      <h1>Recommended Books For You</h1>
      <StaggeredAnimation classname="recommended__section-items">
        {booksData.map((book) => (
          <Card
            data={book}
            role="default"
            favorite={listItems.includes(book.id)}
            key={book.id}
          />
        ))}
      </StaggeredAnimation>
    </div>
  );
}

export default RecommendedBooks;
