import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  selectedType: string;
  otherFilters: Record<string, string>;
};

const initialState: FilterState = {
  selectedType: "",
  otherFilters: {},
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSelectedType: (state, action: PayloadAction<string>) => {
      state.selectedType = action.payload;
    },
    setOtherFilters: (state, action: PayloadAction<Record<string, any>>) => {
      state.otherFilters = action.payload;
    },
    clearFilters: (state) => {
      state.selectedType = "";
      state.otherFilters = {};
    },
  },
});

export const { setSelectedType, setOtherFilters, clearFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
