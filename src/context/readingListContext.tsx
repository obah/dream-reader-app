import { createContext, useState, useEffect, PropsWithChildren } from "react";
import { ReadingListData } from "../types";

export type Id = string;

interface IReadingListContext {
  bookList?: ReadingListData[];
  addBook?: (bookData: ReadingListData) => void;
  removeBook?: (bookId: Id) => void;
}

export const ReadingListContext = createContext<IReadingListContext>({});

export function ReadingListContextProvider({ children }: PropsWithChildren) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const key = "readingList";
  const previousBookList: ReadingListData[] = ls
    ? JSON.parse(`${ls.getItem(key)}`)
    : [];

  const [bookList, setBookList] = useState<ReadingListData[]>(
    previousBookList || []
  );

  useEffect(() => {
    if (bookList.length > 0) {
      ls?.setItem(key, JSON.stringify(bookList));
    }
  }, [bookList, ls]);

  const addBook = (bookData: ReadingListData) =>
    setBookList((prev) => [...prev, bookData]);

  const removeBook = (bookId: Id) =>
    setBookList((prev) => prev.filter((book) => book.id !== bookId));

  return (
    <ReadingListContext.Provider value={{ bookList, addBook, removeBook }}>
      {children}
    </ReadingListContext.Provider>
  );
}
