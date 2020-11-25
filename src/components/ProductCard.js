import React, { useState, useEffect } from 'react';
import Overlay from './Overlay'

import buyIcon from "../assets/icons/buy-blue.svg";

function ProductCard(props) {

  let variableHover;
const { id, category, cost, img, name } = props.product;

// useEffect(()=> {console.log(product)}, [])
  return(

    <div className="product-card">
      <img src={buyIcon} alt="buy-icon" className="buy-icon" />
      {/* <div className="product-img"> */}
        <img src={img.url} alt=""/>
      {/* </div> */}
      <div className="text-box">
        <h4>{category}</h4>
        <h3>{name}</h3>
      </div>

      {variableHover &&
        <Overlay />
      }
    </div>
  )
}

export default ProductCard;
