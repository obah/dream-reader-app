import axios from "axios";
import { useEffect, useState } from "react";

type Props = {
  query: string;
};

function useBooks({ query }: Props) {
  const [books, setBooks] = useState<unknown[]>([]);

  const getBooks = async () => {
    const booksData = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5`
    );

    if (booksData && booksData.data) {
      setBooks(booksData.data);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return { books };
}

export default useBooks;
