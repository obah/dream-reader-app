import { useRef } from "react";
import useBooks from "./hooks/useBooks";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

function SearchBar() {
  const searchRef = useRef<HTMLInputElement>(null);

  const { setSearchQuery } = useBooks();

  const location = useLocation();
  const pathname = location.pathname;

  const handleSearch = () => {
    const searchQuery = searchRef.current?.value;
    setSearchQuery(searchQuery);
  };

  return (
    <>
      <div>
        <div className="landing-search-bar">
          <div>
            <FaSearch />
          </div>

          <input
            ref={searchRef}
            type="text"
            name="bookQuery"
            placeholder={
              pathname === "/"
                ? " What book is on your mind?"
                : "Search for a book:"
            }
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>

      {pathname === "/" && (
        <div className="landing-buttons">
          <button>
            <NavLink to="/dashboard">
              Launch App <FaArrowRight />
            </NavLink>
          </button>
        </div>
      )}
    </>
  );
}

export default SearchBar;
