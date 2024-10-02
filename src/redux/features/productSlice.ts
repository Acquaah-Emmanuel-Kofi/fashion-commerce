import { IProduct, IProducts } from "@/modules/interfaces/products.interface";
import { fetchDataFromApi } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type ProductState = {
  products: IProduct[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await fetchDataFromApi("https://dummyjson.com/products");
    return data;
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
        (state, action: PayloadAction<IProduct[]>) => {
          state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load products";
      });
  },
});

export default productSlice.reducer;
