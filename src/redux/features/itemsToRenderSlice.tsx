import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ItemsState = {
  itemsToRender: string;
};

const initialState: ItemsState = {
  itemsToRender: "cart",
};

const itemsToRenderSlice = createSlice({
  name: "itemsToRender",
  initialState,
  reducers: {
    setSelectedItemsToRender: (state, action: PayloadAction<string>) => {
      state.itemsToRender = action.payload;
    },
  },
});

export const { setSelectedItemsToRender } = itemsToRenderSlice.actions;

export default itemsToRenderSlice.reducer;
