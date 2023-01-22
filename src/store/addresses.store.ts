import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Address, ResponseData } from "types/body";

export const addressSlice = createSlice({
  name: "addresses",
  initialState: {
    addresses: [] as ResponseData<Address>[],
  },
  reducers: {
    setAddresses: (state, action: PayloadAction<ResponseData<Address>[]>) => {
      state.addresses = action.payload;
    },
  },
});

export const { setAddresses } = addressSlice.actions;

export default addressSlice.reducer;
