import { createSlice } from "@reduxjs/toolkit";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    selectedDate: new Date().toDateString(),
  },
  reducers: {
    selectedDateAction(state, action) {
      state.selectedDate = action.payload;
    },
  },
});

export const { selectedDateAction } = commonSlice.actions;

export const selectSelectedDate = (state: any) => state.common.selectedDate;

export default commonSlice.reducer;
