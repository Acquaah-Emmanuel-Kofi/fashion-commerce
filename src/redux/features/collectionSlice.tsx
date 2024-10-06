import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CollectionState = {
  collection: string;
};

const initialState: CollectionState = {
  collection: "all",
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    setSelectedCollection: (state, action: PayloadAction<string>) => {
      state.collection = action.payload;
    },
  },
});

export const { setSelectedCollection } = collectionSlice.actions;

export default collectionSlice.reducer;
