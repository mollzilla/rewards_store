import { ProductsData } from '../reducers/products';
import { UserData } from './../reducers/user';

export enum ACTION_TYPE {
  SET_USER,
  USER_FAIL,
  SET_PRODUCTS,
  PRODUCTS_FAIL,
  SET_PAGINATION,
  SET_REDEEM_RESULT,
}

export type Actions =
  | {
      type: ACTION_TYPE.SET_USER;
      payload: UserData;
    }
  | {
      type: ACTION_TYPE.USER_FAIL;
    }
  | {
      type: ACTION_TYPE.SET_PRODUCTS;
      payload: ProductsData[];
    }
  | {
      type: ACTION_TYPE.PRODUCTS_FAIL;
    }
  | {
      type: ACTION_TYPE.SET_PAGINATION;
      payload: number;
    }
  | {
      type: ACTION_TYPE.SET_REDEEM_RESULT;
      payload: { message: string; status: 'success' | 'error' };
    };
