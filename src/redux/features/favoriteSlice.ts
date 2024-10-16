import { IProduct } from "@/modules/interfaces/products.interface";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface FavoriteState {
  items: IProduct[];
}

const initialState: FavoriteState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<IProduct>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push(newItem);
      }
    },
    removeFromFavorite: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const itemToRemove = state.items.find((item) => item.id === id);

      if (itemToRemove) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearFavorite: (state) => {
      state.items = [];
    },
  },
});

export const selectFavoriteItems = (state: RootState) => state.favorites.items;

// Selector to count the number of items in favorites
export const selectFavoriteItemCount = createSelector(
  selectFavoriteItems,
  (favoriteItems) => favoriteItems.length
);

export const { addToFavorite, removeFromFavorite, clearFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
