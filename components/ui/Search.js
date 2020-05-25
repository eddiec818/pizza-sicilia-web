import React from "react";

const Search = () => {
  return (
    <>
      <div className="search-form-wrapper">
        <div className="search-trigger close-btn">
          <span></span>
          <span></span>
        </div>
        <form className="search-form">
          <input type="text" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <i className="flaticon-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
