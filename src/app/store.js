import { configureStore } from "@reduxjs/toolkit";
import { contactApi } from "./services/contactApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { authApi } from "./services/authApi";

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling, and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware,authApi.middleware),
});

// it is used to automatically dispatch network-related actions based on the lifecycle of a query.
setupListeners(store.dispatch);
