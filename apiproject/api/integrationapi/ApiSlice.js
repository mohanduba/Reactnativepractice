import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl:  "https://webapidev.benmyl.com/" }),
    endpoints: builder => ({}),  
  });