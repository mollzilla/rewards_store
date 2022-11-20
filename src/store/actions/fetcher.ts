import axios, { AxiosRequestConfig } from 'axios';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { State } from '..';

export function fetcher<T>(options: AxiosRequestConfig): ThunkAction<Promise<T>, State, unknown, AnyAction> {
  return async () => {
    const res = await axios.request<
      unknown,
      {
        data: T;
      }
    >({
      ...options,
      method: options?.method || 'get',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQ0MDk1MTI2ZjdkMjAwMjA0MTE0Y2IiLCJpYXQiOjE2MDc3MzE1Mzd9.WOlVuhewUC0y9yaa4zkKnq9oO_0ck3zvegsPbAwTWvE',
      },
    });
    return res.data;
  };
}
