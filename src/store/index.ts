import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import userReducer, { UserState } from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export interface State {
  user: UserState;
}

const store = createStore<State, AnyAction, unknown, unknown>(
  combineReducers<State>({
    user: userReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
