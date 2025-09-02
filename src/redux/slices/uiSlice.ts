import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  currentPage: number;
  itemsPerPage: number;
}

const initialState: UIState = {
  currentPage: 1,
  itemsPerPage: 6,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPage } = uiSlice.actions;
export default uiSlice.reducer;
