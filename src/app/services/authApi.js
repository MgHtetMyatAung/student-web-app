import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointApi } from "../endpoint";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpointApi }),
  endpoints: (builder) => ({
    loginAction: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      transformResponse: (response) => {
        console.log(response);
      },
    }),
    registerAction: builder.mutation({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginActionMutation, useRegisterActionMutation } = authApi;
