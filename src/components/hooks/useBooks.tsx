import axios from "axios";
import { useEffect, useState } from "react";
import { InputRef } from "../../types";

function useBooks() {
  const [books, setBooks] = useState<unknown[]>([]);
  const [searchQuery, setSearchQuery] = useState<InputRef>("");

  const getBooks = async () => {
    const booksData = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=5`
    );

    if (booksData && booksData.data) {
      setBooks(booksData.data);
    }
  };

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return { books, setSearchQuery };
}

export default useBooks;
