import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (limit: number = 20) => ({
        url: `comments?_limit=${limit}`,
      }),
    }),
    getComment: builder.query({
      query: (id: string) => ({
        url: `comments/${id}`,
      }),
    }),
  }),
});

export const { useGetCommentsQuery, useGetCommentQuery } = postsApi;
