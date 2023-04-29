import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointApi } from "../endpoint";
export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: endpointApi,
  }),
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => "contact",
    }),
    getSingleContact: builder.query({
      query: (id) => ({
        url: `contact/${id}`,
      }),
    }),
    createContact: builder.mutation({
      query: (data) => ({
        url: "contact",
        method: "POST",
        body: data,
      }),
    }),
    updateContact: builder.mutation({
      query: (data) => ({
        url: `contact/${data.id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contact/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllContactsQuery, useGetSingleContactQuery,useCreateContactMutation,useDeleteContactMutation, useUpdateContactMutation } = contactApi;
