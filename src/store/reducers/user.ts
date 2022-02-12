import { ACTION_TYPE } from './../actions/index';
import { Actions } from '../actions';

export type UserData = {
  createDate?: string;
  name?: string;
  points?: number;
  redeemHistory?: [];
  _v?: number;
  _id?: string;
};

export type UserState = { user: UserData };

const initialState: UserState = { user: {} };

export default function userReducer(state = initialState, action: Actions): UserState {
  switch (action.type) {
    case ACTION_TYPE.SET_USER:
      console.log(state);
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
