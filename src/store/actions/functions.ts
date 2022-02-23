import { ProductsData } from './../reducers/products';
import { ACTION_TYPE } from './index';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { UserData } from '../reducers/user';
import { State } from '..';
import { fetcher } from './fetcher';

export function superFetchUserData(): ThunkAction<Promise<void>, State, unknown, AnyAction> {
  return async (dispatch) => {
    const options = { url: 'https://coding-challenge-api.aerolab.co/user/me' };
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
    const options = { url: 'https://coding-challenge-api.aerolab.co/products' };

    try {
      const fetchedProductsData = await dispatch(fetcher<ProductsData[]>(options));
      dispatch({ type: ACTION_TYPE.SET_PRODUCTS, payload: fetchedProductsData });
    } catch (e) {
      console.log(e);
      dispatch({ type: ACTION_TYPE.PRODUCTS_FAIL });
    }
  };
}
