import axios from "axios";
import { useEffect, useState } from "react";
import { BookData, GoogleBooksResponse, InputRef } from "../../types";

function useBooks() {
  const [booksData, setBooksData] = useState<GoogleBooksResponse[]>([]);
  const [searchQuery, setSearchQuery] = useState<InputRef>("");
  const [books, setBooks] = useState<BookData[]>([]);

  const getBooks = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=5`
    );

    if (response && response.data) {
      setBooksData(response.data.items);
    }

    const booksInfo: BookData[] = [];
    for (let i = 0; i <= booksData.length - 1; i++) {
      booksInfo.push(booksData[i].volumeInfo);
    }
    const filteredbooks: BookData[] = booksInfo.map((book) => ({
      title: book.title,
      subtitle: book.subtitle,
      authors: book.authors,
    }));
    setBooks(filteredbooks);
  };

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return { books, setSearchQuery };
}

export default useBooks;
