import { createSlice } from "@reduxjs/toolkit";

import { AboutBody } from "src/types";

export const aboutSlice = createSlice({
  name: "about",
  initialState: {
    about: {
      number: "87024168761",
    } as AboutBody,
  },
  reducers: {
    add: (state, action) => {
      state.about = action.payload;
    },
  },
});

export const { add } = aboutSlice.actions;

export default aboutSlice.reducer;
