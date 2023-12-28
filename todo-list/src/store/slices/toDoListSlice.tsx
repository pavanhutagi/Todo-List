import { createSlice } from "@reduxjs/toolkit";

export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: {
    toDoListData: [],
  },
  reducers: {
    toDoListDataAction: (state, action) => {
      state.toDoListData = action.payload;
    },
  },
});

export const { toDoListDataAction } = toDoListSlice.actions;

export const selectToDoListData = (state: any) => state.toDoList.toDoListData;

export default toDoListSlice.reducer;
