// TODO;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useState, useEffect, useContext } from 'react';
import Overlay from './Overlay';
import ProductCard from './ProductCard';
import UserHeader from './UserHeader';
import TransactionResultModal from './TransactionResultModal';
import AppProvider from '../ContextProvider';
import { AppContext } from '../ContextProvider';

// https://fontawesome.com/

function CardContainer() {
  const { userData, setUserData } = useContext(AppContext);
  const { productsData, productsOrder } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  let success = true;

  useEffect(() => {
    setProducts(productsData);
  }, [productsData, products]);

  return (
    <>
      <div className="card-container">
        <Overlay />
        <TransactionResultModal success={success} />
        {products.length && products.map((product) => <ProductCard {...product} key={product._id} />)}
      </div>
    </>
  );
}

export default CardContainer;
