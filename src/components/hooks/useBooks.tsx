import axios from "axios";
import { useState } from "react";
import { BookData, GoogleBooksResponse, InputRef } from "../../types";

function useBooks() {
  const [books, setBooks] = useState<BookData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getBooks = async (query: InputRef) => {
    setIsLoading(true);
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=9`
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
    setIsLoading(false);
  };

  const clearBooks = () => {
    setBooks([]);
  };

  return { books, isLoading, clearBooks, getBooks };
}

export default useBooks;
