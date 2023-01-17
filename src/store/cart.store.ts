import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInCart, ResponseData } from "types/body";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as ResponseData<ProductInCart>[],
  },
  reducers: {
    setCart: (state, action: PayloadAction<ResponseData<ProductInCart>[]>) => {
      state.cart = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
