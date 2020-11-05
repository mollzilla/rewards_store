import React, { useState, useEffect } from 'react';


function SearchBar() {

  let pagination=true;

  return(
    <>
      <div>
        <h4>16 of 32 products</h4>
      </div>
      <div>
        <div>Sort by:</div>
        <button>Most recent</button>
        <button>Lowest Price</button>
        <button>Highest Price</button>
        <button>&gt;</button>
        {pagination &&
        <button>&lt;</button>}
      </div>
    </>
  )
}

export default SearchBar;
