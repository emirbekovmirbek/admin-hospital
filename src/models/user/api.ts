import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'configs/api/apiQuery.ts';
import { AuthEndpoints, TokenList } from 'configs/api/apiTypes.ts';
import { setIsAuth } from 'models/user/slice.ts';
import { setCookie } from 'utils/cookiesHelpers.ts';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  endpoints: build => ({
    fetchAuth: build.mutation<ApiResponse<AuthResponse>, LoginType>({
      query: arg => ({
        url: AuthEndpoints.AUTH,
        method: 'POST',
        body: arg,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled;
          setCookie(TokenList.ACCESS_TOKEN, res.data.accessToken);
          setCookie(TokenList.REFRESH_TOKEN, res.data.refreshToken);
          dispatch(setIsAuth(true));
        } finally {
          console.log('error');
        }
      },
    }),
  }),
});

export const { useFetchAuthMutation } = authApi;
