import { ACTION_TYPE } from '../actions/index';
import { Actions } from '../actions';

export type ProductsData = {
  category: string; // TODO literal
  cost: number;
  img: { url: string; hdurl: string };
  name: string;
  _id: string;
};

export type ProductsState = { products: ProductsData[]; total: number; currentPage: number };

const initialState: ProductsState = { products: [], total: 0, currentPage: 1 };

export default function productsReducer(state = initialState, action: Actions): ProductsState {
  switch (action.type) {
    case ACTION_TYPE.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        total: action.payload.length,
        currentPage: 1,
      };
    case ACTION_TYPE.SET_PAGINATION:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
