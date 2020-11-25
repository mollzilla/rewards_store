import React, { useState, useEffect, useContext } from 'react';
import Overlay from "./Overlay"
import ProductCard from "./ProductCard"
import AppProvider from "../ContextProvider";
import { AppContext } from "../ContextProvider";


function CardContainer() {

  const { userData, setUserData } = useContext(AppContext);
  const { productsData } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {setProducts(productsData)}, [productsData, products])

  return (
    <>
      <div className="card-container">
        {/* <Overlay /> */}
        {products.length && (products.map(product=>
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </>
  )
}

export default CardContainer;
