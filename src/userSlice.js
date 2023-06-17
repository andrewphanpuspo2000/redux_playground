import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const userData = createSlice({
  name: "userData",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

const { reducer, actions } = userData;

export const { addData } = actions;

export const data = reducer;
