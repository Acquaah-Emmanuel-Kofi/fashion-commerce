import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "@/redux/features/productSlice";
import cartReducer from "@/redux/features/cartSlice";
import searchReducer from "@/redux/features/searchSlice";
import filtersReducer from "@/redux/features/filtersSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  search: searchReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export default store;
