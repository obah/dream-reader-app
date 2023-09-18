import { useRef } from "react";
import useBooks from "../../components/hooks/useBooks";
import { Layout } from "../../components/layout";
import SearchResults from "../../components/searchResults";
import ReadingList from "../../components/readingList";
import { BsSearch } from "react-icons/bs";
import { FaRegCircleXmark } from "react-icons/fa6";
import "./styles/dashboard.css";

export function Dashboard() {
  const searchRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef(null);
  const { books, setSearchQuery, clearBooks } = useBooks();

  const handleSearch = () => {
    const searchQuery = searchRef.current?.value;
    setSearchQuery(searchQuery);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToTop = (section: any) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  const clearSearchResult = () => {
    clearBooks ? clearBooks() : null;
    scrollToTop(sectionRef);
  };

  return (
    <Layout>
      <section className="dashboard__main" ref={sectionRef}>
        <div className="dashboard__main-text">
          <h1>Dream Reader</h1>
          <p>Your personal portal to all books on the internet</p>
        </div>

        <div className="dashboard__main-search">
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

        {books.length > 0 && (
          <div className="dashboard__main-results">
            <div className="results__wrapper">
              {books.map((book) => (
                <div key={book.id} className="results__wrapper-item">
                  <SearchResults data={book} />
                </div>
              ))}
            </div>

            <div className="clearSearch-btn">
              <button onClick={clearSearchResult}>
                Clear <FaRegCircleXmark />
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="reading-list">
        <ReadingList />
      </section>
    </Layout>
  );
}
