// import { useState, useEffect } from "react";
import { BookData } from "../types";

type Props = {
  data: BookData;
};

function SearchResults({ data }: Props) {
  const { title, authors, subtitle } = data;

  return (
    <>
      <h2>{title}</h2>
      <span>{subtitle}</span>
      <p>{authors}</p>
    </>
  );
}

export default SearchResults;
