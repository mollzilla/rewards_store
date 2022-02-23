/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO;

import React, { useEffect, useState, useCallback, Dispatch, SetStateAction } from 'react';
import { superFetchProductsData, superFetchUserData } from './store/actions/functions';
import { useDispatch } from 'react-redux';

export const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ0MDk1MTI2ZjdkMjAwMjA0MTE0Y2IiLCJpYXQiOjE2MDc3MzE1Mzd9.WOlVuhewUC0y9yaa4zkKnq9oO_0ck3zvegsPbAwTWvE',
};

type ContextState = {
  productsOrder: any;
  setProductsOrder?: Dispatch<SetStateAction<string>>;
  handleProductsOrder?: Dispatch<SetStateAction<string>>;
};

const defaultState = {
  productsOrder: 'default',
};

export const AppContext = React.createContext<ContextState>(defaultState);

export default function AppProvider({ children }: { children: any }) {
  const [productsOrder, setProductsOrder] = useState('default');
  const dispatch = useDispatch();

  const handleProductsOrder = (e: any) => {
    setProductsOrder(e.target.value);
    console.log(e.target.value);
  };

  /* ademas hacer un filter ???*/

  // useEffect(() => {
  //   let productsDataSorted = [...productsData];
  //   switch (productsOrder) {
  //     case 'highest':
  //       productsDataSorted = productsDataSorted.sort((a, b) => a.cost + b.cost);
  //       console.log(productsDataSorted);
  //       console.log(productsOrder);
  //       break;
  //     case 'lowest':
  //       productsDataSorted = productsDataSorted.sort((a, b) => a.cost - b.cost);
  //       console.log(productsDataSorted);
  //       console.log(productsOrder);
  //       break;
  //     case 'recent':
  //       productsDataSorted = productsDataSorted.sort((a, b) => a._id - b._id);
  //       console.log(productsDataSorted[0].id);
  //       console.log(productsOrder);
  //       console.log('e;fwoiawhfe;ksdnf;asdklfn');
  //       break;
  //     default: {
  //       productsDataSorted = productsDataSorted.sort(
  //         (a, b) => productsDataSorted.indexOf(a) - productsDataSorted.indexOf(b)
  //       );
  //       console.log(productsOrder);
  //       break;
  //     }
  //   }
  //   setProductsData(productsDataSorted);
  // }, [productsData, productsOrder]);

  const getStuff = useCallback(() => {
    return async () => {
      console.log('get stuff');
      await dispatch(superFetchUserData());
      await dispatch(superFetchProductsData());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStuff());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        productsOrder,
        setProductsOrder,
        handleProductsOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
