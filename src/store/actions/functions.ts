import { ProductsData } from './../reducers/products';
import { ACTION_TYPE } from './index';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { UserData } from '../reducers/user';
import { State } from '..';
import { fetcher } from './fetcher';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ0MDk1MTI2ZjdkMjAwMjA0MTE0Y2IiLCJpYXQiOjE2MDc3MzE1Mzd9.WOlVuhewUC0y9yaa4zkKnq9oO_0ck3zvegsPbAwTWvE',
};

export function superFetchUserData(): ThunkAction<Promise<void>, State, unknown, AnyAction> {
  return async (dispatch) => {
    const options = { headers, url: 'https://coding-challenge-api.aerolab.co/user/me' };
    try {
      console.log('superfetchuserdata');
      const fetchedUserData = await dispatch(fetcher<UserData>(options));
      dispatch({ type: ACTION_TYPE.SET_USER, payload: fetchedUserData });
    } catch (e) {
      console.log(e);
      dispatch({ type: ACTION_TYPE.USER_FAIL });
    }
  };
}

export function superFetchProductsData(): ThunkAction<Promise<void>, State, unknown, AnyAction> {
  return async (dispatch) => {
    const options = { headers, url: 'https://coding-challenge-api.aerolab.co/products' };

    try {
      const fetchedProductsData = await dispatch(fetcher<ProductsData[]>(options));
      dispatch({ type: ACTION_TYPE.SET_PRODUCTS, payload: fetchedProductsData });
    } catch (e) {
      console.log(e);
      dispatch({ type: ACTION_TYPE.PRODUCTS_FAIL });
    }
  };
}
