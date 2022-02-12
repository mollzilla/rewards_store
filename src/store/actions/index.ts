import { UserData } from './../reducers/user';

export enum ACTION_TYPE {
  SET_USER,
  USER_FAIL,
}

export type Actions =
  | {
      type: ACTION_TYPE.SET_USER;
      payload: UserData;
    }
  | {
      type: ACTION_TYPE.USER_FAIL;
    };
