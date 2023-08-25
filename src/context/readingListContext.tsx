import { createContext, useState, useEffect, PropsWithChildren } from "react";

export type Id = string;

interface IReadingListContext {
  bookList?: string[];
  addBook?: (bookId: Id) => void;
  removeBook?: (bookId: Id) => void;
}

export const ReadingListContext = createContext<IReadingListContext>({});

export function ReadingListContextProvider({ children }: PropsWithChildren) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const key = "readingList";
  const previousBookList: Id[] = ls ? JSON.parse(`${ls.getItem(key)}`) : [];

  const [bookList, setBookList] = useState<Id[]>(previousBookList || []);

  useEffect(() => {
    if (bookList.length > 0) {
      ls?.setItem(key, JSON.stringify(bookList));
    }
  }, [bookList, ls]);

  const addBook = (bookId: Id) => {
    setBookList((prev) => [...prev, bookId]);
  };

  const removeBook = (bookId: Id) => {
    setBookList((prev) => prev.filter((id) => id !== bookId));
  };

  return (
    <ReadingListContext.Provider value={{ bookList, addBook, removeBook }}>
      {children}
    </ReadingListContext.Provider>
  );
}
