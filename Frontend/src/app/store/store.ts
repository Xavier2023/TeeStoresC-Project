import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../../features/contact/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../features/catalog/catalogApi";
import { uiSlice } from "../layouts/uiSlice";
import { errorApi } from "../../features/about/errorApi";

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    [errorApi.reducerPath]: errorApi.reducer,
    counter: counterSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogApi.middleware, errorApi.middleware),
});

// Typescript code for defining a type or assigning a type to a variable, function, array, object or hook.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Creating a useable hook and assiging a type to that hook
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
