import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    Increment: (state) => {
      state.counterVal++;
    },
    Decrement: (state) => {
      state.counterVal--;
    },
    Add: (state, action) => {
      state.counterVal += action.payload.val;
    },
    Subtract: (state, action) => {
      state.counterVal -= action.payload.val;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
