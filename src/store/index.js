// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import privacySlice from "./privacy";
import counterSlice from "./counter";
import productsSlice from "./products";
import pinnednotes from "./pinnedNotes";

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
    products: productsSlice.reducer,
    pinned: pinnednotes.reducer,
  },
});

export default counterStore;
