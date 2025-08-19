import {
  BaseQueryFn,
  fetchBaseQuery,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
import { AuthEndpoints, TokenList } from 'configs/api/apiTypes.ts';
import { BASE_URL } from 'utils/envHelpers.ts';
import { getCookie, removeCookies, setCookie } from 'utils/cookiesHelpers.ts';
import { createApi } from '@reduxjs/toolkit/query/react';
import { setIsAuth } from 'models/user/slice.ts';

type QueryReturnValue<T = unknown, E = unknown, M = unknown> =
  | {
      error: E;
      data?: undefined;
      meta?: M;
    }
  | {
      error?: undefined;
      data: T;
      meta?: M;
    };
export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

const baseQueryWithToken = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: headers => {
    headers.set('Content-Type', headers.get('Content-Type') || 'application/json');
    const token = getCookie(TokenList.ACCESS_TOKEN);
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
  responseHandler: response => {
    return response.headers.get('content-type')?.includes('application/json')
      ? response.json()
      : response.text();
  },
});

export const baseQueryWithRefresh: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQueryWithToken(args, api, extraOptions);
  if (result?.error?.status === 403) {
    removeCookies(TokenList.ACCESS_TOKEN);
    const refreshToken = getCookie(TokenList.REFRESH_TOKEN);
    const refreshResult = (await baseQuery(
      {
        url: AuthEndpoints.UPDATE_TOKEN,
        method: 'POST',
        body: {
          refreshToken,
        }
      },
      api,
      extraOptions,
    )) as QueryReturnValue<ApiResponse<AuthResponse>, FetchBaseQueryError, FetchBaseQueryMeta>;
    if (refreshResult?.data) {
      setCookie(TokenList.REFRESH_TOKEN, refreshResult.data.refreshToken);
      setCookie(TokenList.ACCESS_TOKEN, refreshResult.data.accessToken);
      result = await baseQueryWithToken(args, api, extraOptions);
    } else {
      removeCookies(TokenList.REFRESH_TOKEN);
      api.dispatch(setIsAuth(false));
    }
  }
  return result;
};

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  tagTypes: ['patients', 'patient', 'treatments'],
  baseQuery: baseQueryWithRefresh,
  endpoints: () => ({}),
});
