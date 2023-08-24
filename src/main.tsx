import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ReadingListContextProvider } from "./context/readingListContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReadingListContextProvider>
        <App />
      </ReadingListContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
