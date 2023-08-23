// import { useState, useEffect } from "react";
import { BookData } from "../types";

type Props = {
  data: BookData[];
};

function SearchResults({ data }: Props) {
  console.log(data);

  return (
    <div>
      {data?.length > 0 ? (
        <div>
          <h2>Books found</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchResults;
