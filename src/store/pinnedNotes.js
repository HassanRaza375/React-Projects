import { createSlice } from "@reduxjs/toolkit";

const pinnednotes = createSlice({
  name: "PinnedNotes",
  initialState: { PinnedItems: [] },
  reducers: {
    Setpinned: (state, actions) => {
      const updatedpinned = [...state.PinnedItems, actions.payload];
      state.PinnedItems = updatedpinned;
      const getlocalpinneddata = JSON.parse(localStorage.getItem("pinned"));
      localStorage.setItem(
        "pinned",
        JSON.stringify([...state.PinnedItems, ...getlocalpinneddata])
      );
    },
    Editpinned: (state, actions) => {},
    Deletepinned: (state, actions) => {},
    Initializapinneds: (state) => {
      const getlocalpinneddata = JSON.parse(localStorage.getItem("pinned"));
      state.PinnedItems = getlocalpinneddata;
    },
  },
});

export const PinnedActions = pinnednotes.actions;
export default pinnednotes;
