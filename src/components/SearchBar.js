import React, { useState, useEffect, useContext } from 'react';
import AppProvider from "../ContextProvider";
import { AppContext } from "../ContextProvider";


function SearchBar(props) {

  let pagination = true;

  const {productsOrder, setProductsOrder, handleProductsOrder} = useContext(AppContext)
  

  return (
    <>
      <div className="search-bar">
        <div className="products-count">
          <h4>16 of 32 products</h4>
        </div>
        <div className="sort">Sort by:</div>
        <div className="buttons">
          <button value={"recent"} onClick={handleProductsOrder}>Most recent</button>
          <button value={"lowest"} onClick={handleProductsOrder}>Lowest Price</button>
          <button value={"highest"} onClick={handleProductsOrder}>Highest Price</button>
        </div>
        <button className="next-page">&gt;</button>
        {pagination &&
          <button className="next-page">&lt;</button>}
      </div>
    </>
  )
}

export default SearchBar;
