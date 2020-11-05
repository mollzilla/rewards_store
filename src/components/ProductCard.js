import React, { useState, useEffect } from 'react';
import Overlay from './Overlay'


function ProductCard() {

  let variableHover;

  return(
    <div className="product-card">
      <div className="product-img">

      </div>
      <div className="text-box">
        <h4>Category</h4>
        <h3>Product</h3>
      </div>

      {variableHover &&
        <Overlay />
      }
    </div>
  )
}

export default ProductCard;
