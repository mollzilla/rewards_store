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
      headers: {
        ...options.headers,
      },
    });
    return res.data;
  };
}
