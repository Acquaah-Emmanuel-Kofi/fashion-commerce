import { IProduct } from "@/modules/interfaces/products.interface";
import { fetchDataFromApi } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type ProductState = {
  products: IProduct[];
  available: number;
  unavailable: number;
  total: string;
  loading: boolean;
  error: string | null;
};

const initialState: ProductState = {
  products: [],
  available: 0,
  unavailable: 0,
  total: "0",
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetchDataFromApi("/product/all");
    return response.data; 
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (
          state,
          action: PayloadAction<{
            available: number;
            unavailable: number;
            products: IProduct[];
            total: string;
          }>
        ) => {
          state.loading = false;
          state.products = action.payload.products; 
          state.available = action.payload.available; 
          state.unavailable = action.payload.unavailable; 
          state.total = action.payload.total; 
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load products";
      });
  },
});

export default productSlice.reducer;
