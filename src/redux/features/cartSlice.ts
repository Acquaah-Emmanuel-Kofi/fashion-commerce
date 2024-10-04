import { ICartItem } from "@/modules/interfaces/products.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: ICartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      console.log("newItem: ", newItem);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }

      state.totalAmount += parseFloat(newItem.price) * newItem.quantity;
    },
  },
});

export const { addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
