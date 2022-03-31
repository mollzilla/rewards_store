import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import userReducer, { UserState } from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productsReducer, { ProductsState } from './reducers/products';

export interface State {
  user: UserState;
  products: ProductsState;
}

export const store = createStore<State, AnyAction, unknown, unknown>(
  combineReducers<State>({
    user: userReducer,
    products: productsReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
