import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../endpoint";

const authHeaderInterceptor = (request) => {
  const token = localStorage.getItem("token");
  if (token) {
    request.headers.set("authorization", `Bearer ${token}`);
  }

  return request;
};

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return request;
    },
    prepareRequest: (request) => authHeaderInterceptor(request),
  }),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => "contact",
      providesTags: ["contact"],
    }),
    getSingleContact: builder.query({
      query: (id) => ({
        url: `contact/${id}`,
      }),
      providesTags: ["contact"],
    }),
    createContact: builder.mutation({
      query: (data) => ({
        url: "contact",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),
    updateContact: builder.mutation({
      query: (data) => ({
        url: `contact/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contact/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useGetSingleContactQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactApi;
