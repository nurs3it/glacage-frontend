import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductInCart, ResponseData } from "types/body";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] as ResponseData<ProductInCart>[],
    totalPrice: 0,
  },
  reducers: {
    setCart: (state, action: PayloadAction<ResponseData<ProductInCart>[]>) => {
      state.cart = action.payload;
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { setCart, setTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;
