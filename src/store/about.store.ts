import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactsBody } from "types/body";

export const aboutSlice = createSlice({
  name: "about",
  initialState: {
    contacts: {} as ContactsBody,
  },
  reducers: {
    setContacts: (state, action: PayloadAction<ContactsBody>) => {
      state.contacts = action.payload;
    },
  },
});

export const { setContacts } = aboutSlice.actions;

export default aboutSlice.reducer;
