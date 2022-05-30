import { store } from './../index';
import { ProductsData } from './../reducers/products';
import { ACTION_TYPE } from './index';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { UserData } from '../reducers/user';
import { State } from '..';
import { fetcher } from './fetcher';
import { Method } from 'axios';

export const PRODS_PER_PAGE = 16;

export function superFetchUserData(): ThunkAction<Promise<void>, State, unknown, AnyAction> {
  return async (dispatch) => {
    const options = { url: 'https://coding-challenge-api.aerolab.co/user/me' };

    try {
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

export function superGetpoints(amount: 1000 | 5000 | 7500): ThunkAction<Promise<void>, State, unknown, AnyAction> {
  return async (dispatch) => {
    const method: Method = 'POST';

    const options = {
      url: 'https://coding-challenge-api.aerolab.co/user/points',
      method,
      data: { amount },
    };

    try {
      const pointsResponse = await dispatch(fetcher(options));
      console.log(pointsResponse);
      // dispatch({ type: ACTION_TYPE.SET_PRODUCTS, payload: fetchedProductsData });
    } catch (e) {
      console.log(e);
      // dispatch({ type: ACTION_TYPE.PRODUCTS_FAIL });
    }
  };
}

export enum PRODUCT_ORDER_CRITERIA {
  LOWEST,
  HIGHEST,
  NEWEST,
}

export function sortProducts(order: PRODUCT_ORDER_CRITERIA): ThunkAction<Promise<void>, State, unknown, AnyAction> {
  return async (dispatch) => {
    const {
      products: { products },
    } = store.getState();

    let payload = [...products];

    switch (order) {
      case PRODUCT_ORDER_CRITERIA.LOWEST:
        payload = payload.sort((a, b) => a.cost - b.cost);
        break;
      case PRODUCT_ORDER_CRITERIA.HIGHEST:
        payload = payload.sort((a, b) => b.cost - a.cost);
        break;
      case PRODUCT_ORDER_CRITERIA.NEWEST:
        payload = payload.sort((a, b) => {
          if (a._id > b._id) {
            return -1;
          }
          if (a._id < b._id) {
            return 1;
          }
          return 0;
        });
        break;
    }

    dispatch({ type: ACTION_TYPE.SET_PRODUCTS, payload });
  };
}
