import { BookData } from "../types";
import useIdList from "./hooks/useIdList";
import Card from "./card";

type Props = {
  data: BookData;
};

function SearchResults({ data }: Props) {
  const { id } = data;
  const { listItems } = useIdList();

  return (
    <Card
      data={data}
      role="default"
      favorite={listItems.includes(id)}
      key={id}
    />
  );
}

export default SearchResults;
