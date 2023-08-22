import { useState } from "react";
import useBooks from "../../components/hooks/useBooks";
import { Layout } from "../../components/layout";

export function Dashboard() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { books } = useBooks({ query: searchQuery });
  console.log(books);

  return (
    <Layout>
      <div>
        <h1>Welcome to Dream Reader</h1>
        <p>Your personal portal to all books on the internet</p>
      </div>
      <div>
        <label htmlFor="bookQuery">Search for a book: </label>
        <input
          type="text"
          name="bookQuery"
          id="bookQuery"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </Layout>
  );
}
