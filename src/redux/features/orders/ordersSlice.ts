import { ApiResponse } from "@/modules/interfaces/common.interface";
import { IOrder } from "@/modules/interfaces/order.interface";
import { fetchDataFromApi } from "@/services/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type OrderState = {
  orders: IOrder[];
  total: string;
  loading: boolean;
  error: string | null;
};

const initialState: OrderState = {
  orders: [],
  total: "0",
  loading: false,
  error: null,
};

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { rejectWithValue }) => {
   try {
      const query: ApiResponse<IOrder[]> = await fetchDataFromApi("/order?all=true");
      
      return {
        orders: query.data,
        total: query.total || "0",
      };
    } catch (error) {
      return rejectWithValue("Failed to fetch orders");
    }
  }
);

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(fetchOrders.fulfilled, (state, action: PayloadAction<{ orders: IOrder[]; total: string }>) => {
        state.loading = false;
        state.orders = action.payload.orders;
        state.total = action.payload.total;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; 
      });
  },
});

export default orderSlice.reducer;
