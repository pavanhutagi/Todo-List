import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./slices/commonSlice";
import toDoListReducer from "./slices/toDoListSlice";

export default configureStore({
  reducer: {
    common: commonReducer,
    toDoList: toDoListReducer,
  },
});
