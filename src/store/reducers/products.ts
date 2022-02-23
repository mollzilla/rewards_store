import { ACTION_TYPE } from '../actions/index';
import { Actions } from '../actions';

export type ProductsData = {
  category: string; // TODO literal
  cost: number;
  img: { url: string; hdurl: string };
  name: string;
  _id: string;
};

export type ProductsState = { products: ProductsData[] };

const initialState: ProductsState = { products: [] };

export default function productsReducer(state = initialState, action: Actions): ProductsState {
  switch (action.type) {
    case ACTION_TYPE.SET_PRODUCTS:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
}
