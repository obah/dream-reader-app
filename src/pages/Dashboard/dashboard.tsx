import { useRef } from "react";
import useBooks from "../../components/hooks/useBooks";
import { Layout } from "../../components/layout";

export function Dashboard() {
  const searchRef = useRef<HTMLInputElement>(null);
  const { books, setSearchQuery } = useBooks();

  const handleSearch = () => {
    const searchQuery = searchRef.current?.value;
    setSearchQuery(searchQuery);
  };

  console.log(books);

  return (
    <Layout>
      <div>
        <h1>Welcome to Dream Reader</h1>
        <p>Your personal portal to all books on the internet</p>
      </div>
      <div>
        <label htmlFor="bookQuery">Search for a book: </label>
        <input ref={searchRef} type="text" name="bookQuery" id="bookQuery" />
        <button onClick={handleSearch}>Search</button>
      </div>
    </Layout>
  );
}
