import React, { useState, useEffect } from 'react';
import Overlay from "./Overlay"
import ProductCard from "./ProductCard"


function CardContainer() {

  let cards=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  return (
    <>
      <div>
        <ProductCard />
        <Overlay />
        {cards.map(card => 
          <ProductCard />
          )}
        {/* <ProductCard /> */}
      </div>
    </>
  )
}

export default CardContainer;
