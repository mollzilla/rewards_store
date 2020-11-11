import React, { useState, useEffect } from 'react';


function SearchBar() {

  let pagination = true;

  return (
    <>
      <div className="search-bar">
        <div className="products-count">
          <h4>16 of 32 products</h4>
        </div>
        <div className="sort">Sort by:</div>
        <div className="buttons">
          <button>Most recent</button>
          <button>Lowest Price</button>
          <button>Highest Price</button>
        </div>
        <button className="next-page">&gt;</button>
        {pagination &&
          <button className="next-page">&lt;</button>}
      </div>
    </>
  )
}

export default SearchBar;
