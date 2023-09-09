import { useEffect, useState, useContext } from "react";
import { Id, ReadingListContext } from "../../context/readingListContext";

type IdList = Id | undefined;

function useIdList() {
  const [listItems, setListItems] = useState<IdList[]>([]);

  const { bookList } = useContext(ReadingListContext);

  useEffect(() => {
    if (bookList) {
      const listOfIds: IdList[] = bookList?.map((book) => book.id);
      setListItems(listOfIds);
    }
  }, [bookList]);

  return { listItems };
}

export default useIdList;
