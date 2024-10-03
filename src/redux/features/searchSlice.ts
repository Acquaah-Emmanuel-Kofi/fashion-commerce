import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchState = {
  keyword: string;
};

const initialState: SearchState = {
  keyword: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    clearSearchKeyword: (state) => {
      state.keyword = "";
    },
  },
});

export const { setSearchKeyword, clearSearchKeyword } = searchSlice.actions;
export default searchSlice.reducer;
