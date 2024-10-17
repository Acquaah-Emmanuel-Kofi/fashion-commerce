import {
  IProductDetails,
  ProductCreationForm,
} from "@/modules/interfaces/products.interface";
import { fetchDataFromApi } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type ProductState = {
  products: IProductDetails[];
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
    return {
      available: response.data.available,
      unavailable: response.data.unavailable,
      products: response.data.products,
      total: response.total,
    };
  }
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (formData: FormData) => {
    const baseUrl =
      process.env.NEXT_PUBLIC_BACKEND_API_URL ||
      "https://fashion-commerce.onrender.com/api/v1";
    const url = `${baseUrl}/product`;

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({
    productId,
    formData,
  }: {
    productId: string;
    formData: ProductCreationForm;
  }) => {
    const baseUrl =
      process.env.NEXT_PUBLIC_BACKEND_API_URL ||
      "https://fashion-commerce.onrender.com/api/v1";
    const url = `${baseUrl}/product/update/${productId}`;

    const response = await fetch(url, {
      method: "PATCH",
       headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();
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
            products: IProductDetails[];
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
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.error = action.error.message || "Failed to create product";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex(
          (product) => product.id === updatedProduct.id
        );
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.error.message || "Failed to update product";
      });
  },
});

export default productSlice.reducer;
