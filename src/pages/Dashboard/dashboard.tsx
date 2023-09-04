import { useRef } from "react";
import useBooks from "../../components/hooks/useBooks";
import { Layout } from "../../components/layout";
import SearchResults from "../../components/searchResults";
import ReadingList from "../../components/readingList";
import { BsSearch } from "react-icons/bs";
import "./styles/dashboard.css";

export function Dashboard() {
  const searchRef = useRef<HTMLInputElement>(null);
  const { books, setSearchQuery } = useBooks();

  const handleSearch = () => {
    const searchQuery = searchRef.current?.value;
    setSearchQuery(searchQuery);
  };

  return (
    <Layout>
      <section className="dashboard__main">
        <div className="dashboard__text">
          <h1>Dream Reader</h1>
          <p>Your personal portal to all books on the internet</p>
        </div>

        <div className="dashboard__search">
          <input
            ref={searchRef}
            type="text"
            name="bookQuery"
            placeholder="What book is on your mind?"
          />
          <button onClick={handleSearch} className="search-icon">
            <BsSearch />
          </button>
        </div>

        <div className="dashboard__results">
          {books.length > 0 &&
            books.map((book) => (
              <div key={book.id}>
                <SearchResults data={book} />
              </div>
            ))}
        </div>
      </section>

      <section className="reading-list">
        <ReadingList />
      </section>
    </Layout>
  );
}
