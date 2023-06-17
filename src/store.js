import { configureStore } from "@reduxjs/toolkit";
import { data } from "./userSlice";
const store = configureStore({
  reducer: {
    dataArr: data,
  },
});

export default store;
