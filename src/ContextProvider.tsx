/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO;

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useCallback, Dispatch, SetStateAction } from 'react';
import { UserData, UserState } from './store/reducers/user';
import { superFetchUserData } from './store/actions/user';
import { useDispatch, useSelector } from 'react-redux';

export const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ0MDk1MTI2ZjdkMjAwMjA0MTE0Y2IiLCJpYXQiOjE2MDc3MzE1Mzd9.WOlVuhewUC0y9yaa4zkKnq9oO_0ck3zvegsPbAwTWvE',
};

type ContextState = {
  userData: UserData;
  productsData: any;
  loading: any;
  productsOrder: any;
  setProductsOrder?: Dispatch<SetStateAction<string>>;
  handleProductsOrder?: Dispatch<SetStateAction<string>>;
};

const defaultState = {
  userData: {},
  productsData: [''],
  loading: false,
  productsOrder: 'default',
};

export const AppContext = React.createContext<ContextState>(defaultState);

export default function AppProvider({ children }: { children: any }) {
  const superUserDataState = useSelector((state: { user: UserState }) => state);
  const [userData, setUserData] = useState<UserData>({});
  const [productsData, setProductsData] = useState(['']);
  const [loading, setLoading] = useState(false);
  const [productsOrder, setProductsOrder] = useState('default');
  const dispatch = useDispatch();

  console.log(superUserDataState.user);

  const fetchUserData = useCallback(async () => {
    setLoading(true);

    try {
      const resp = await fetch('https://coding-challenge-api.aerolab.co/user/me', { headers });
      const fetchedUserData = await resp.json();
      setUserData(fetchedUserData);
      setLoading(false);
      return userData;
    } catch (error) {
      console.log(error);
    }
  }, [userData]);

  const fetchProductsData = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await fetch('https://coding-challenge-api.aerolab.co/products', { headers });
      const fetchedProductsData = await resp.json();
      setProductsData(fetchedProductsData);
      setLoading(false);
      return userData;
    } catch (error) {
      console.log(error);
    }
  }, [userData]);

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
      await fetchUserData();
      await fetchProductsData();
      await dispatch(superFetchUserData());
    };
  }, [dispatch, fetchUserData, fetchProductsData]);

  useEffect(() => {
    dispatch(getStuff());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(userData);
  return (
    <AppContext.Provider
      value={{ loading, userData, productsData, productsOrder, setProductsOrder, handleProductsOrder }}
    >
      {children}
    </AppContext.Provider>
  );
}
