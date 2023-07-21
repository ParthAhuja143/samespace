import React from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = ({
  search,
  setSearch
}) => {
  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search songs/artists"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div className="search-icon">
      <CiSearch />
      </div>
    </div>
  );
};

export default Searchbar;
