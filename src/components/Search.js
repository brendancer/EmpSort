import React from "react";

function Search(props) {
  return (
    <input
      className="form-control mr-sm-2"
      type="search"
      placeholder="Search(Case Sensitive)"
      aria-label="Search"
      onChange={props.handleSearch}
    />
  );
}

export default Search;
