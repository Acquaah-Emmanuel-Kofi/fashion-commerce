import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "@/redux/features/productSlice";
import filtersReducer from "@/redux/features/filtersSlice";
import cartReducer from "@/redux/features/cartSlice";
import favoriteReducer from "@/redux/features/favoriteSlice";
import searchReducer from "@/redux/features/searchSlice";
import collectionsReducer from "@/redux/features/collectionSlice";
import itemsToRenderReducer from "@/redux/features/itemsToRenderSlice";
import loadingSlice from "@/redux/features/loadingSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  products: productReducer,
  filters: filtersReducer,
  cart: cartReducer,
  favorites: favoriteReducer,
  search: searchReducer,
  collections: collectionsReducer,
  itemsToRender: itemsToRenderReducer,
  loadingSlice: loadingSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default store;
