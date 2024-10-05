import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: "privacy",
  initialState: { privacyVal: false },
  reducers: {
    ChangePrivacy: (state) => {
      state.privacyVal = !state.privacyVal;
    },
  },
});

export const privacyActions = privacySlice.actions;
export default privacySlice;
