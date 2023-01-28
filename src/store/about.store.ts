import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AboutBody, ContactsBody } from "types/body";

export const aboutSlice = createSlice({
  name: "about",
  initialState: {
    contacts: {} as ContactsBody,
    about: {} as AboutBody,
  },
  reducers: {
    setContacts: (state, action: PayloadAction<ContactsBody>) => {
      state.contacts = action.payload;
    },
    setAbout: (state, action: PayloadAction<AboutBody>) => {
      state.about = action.payload;
    },
  },
});

export const { setContacts, setAbout } = aboutSlice.actions;

export default aboutSlice.reducer;
