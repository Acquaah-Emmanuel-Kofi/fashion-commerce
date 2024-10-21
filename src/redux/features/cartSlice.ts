import { IProduct } from "@/modules/interfaces/products.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface CartState {
  items: IProduct[];
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
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        toast.error("Item is already in the cart!");
        return;
        
      } else {
        state.items.push(newItem);
        state.totalAmount += parseFloat(newItem.price) * newItem.quantity;
        toast.success("Added to cart successfully!");
      }

    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const itemToRemove = state.items.find((item) => item.id === id);

      if (itemToRemove) {
        state.totalAmount -=
          parseFloat(itemToRemove.price) * itemToRemove.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    updateCartQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalAmount +=
          parseFloat(existingItem.price) * (quantity - existingItem.quantity);
        existingItem.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateCartQuantity, clearCart } =
  cartSlice.actions;

export const selectCartItemCount = (state: { cart: CartState }) =>
  state.cart.items.length;

export default cartSlice.reducer;
