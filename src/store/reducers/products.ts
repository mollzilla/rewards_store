import { ACTION_TYPE } from '../actions/index';
import { Actions } from '../actions';

export type ProductsData = {
  category: string; // TODO literal
  cost: number;
  img: { url: string; hdurl: string };
  name: string;
  _id: string;
};

export type ProductsState = {
  products: ProductsData[];
  total: number;
  currentPage: number;
  totalPages: number;
  redeemResult: { status: 'success' | 'error'; message: string } | null;
};

const initialState: ProductsState = { products: [], total: 0, currentPage: 1, totalPages: 1, redeemResult: null };

export default function productsReducer(state = initialState, action: Actions): ProductsState {
  switch (action.type) {
    case ACTION_TYPE.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        total: action.payload.length,
        currentPage: 1,
        totalPages: Math.ceil(action.payload.length / 16),
      };
    case ACTION_TYPE.SET_PAGINATION:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ACTION_TYPE.SET_REDEEM_RESULT:
      return {
        ...state,
        redeemResult: action.payload,
      };
    default:
      return state;
  }
}
