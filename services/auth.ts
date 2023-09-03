import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const auth = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.0.239:8000/api/" }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, any>({
      query: ({ credentials }) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = auth;
