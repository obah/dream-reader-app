import axios from "axios";
import { useEffect, useState } from "react";
import { BookData, GoogleBooksResponse, InputRef } from "../../types";

function useBooks() {
  const [searchQuery, setSearchQuery] = useState<InputRef>("");
  const [books, setBooks] = useState<BookData[]>([]);

  const getBooks = async () => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=5`
    );

    if (response && response.data) {
      const initialRes: GoogleBooksResponse[] = response.data.items;
      const filteredRes: BookData[] = initialRes.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        subtitle: item.volumeInfo.subtitle,
        authors: item.volumeInfo.authors,
        image: item.volumeInfo.imageLinks?.thumbnail,
        previewLink: item.volumeInfo.previewLink,
      }));

      setBooks(filteredRes);
    }
  };

  useEffect(() => {
    getBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return { books, setSearchQuery };
}

export default useBooks;
