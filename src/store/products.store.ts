import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Product, Response, ResponseData } from "types/body";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [] as ResponseData<Product>[],
    category: {} as Response<ResponseData<Category>>,
    product: {} as ResponseData<Product>,
  },
  reducers: {
    setProducts: (state, action: PayloadAction<ResponseData<Product>[]>) => {
      state.products = action.payload;
    },
    setProduct: (state, action: PayloadAction<ResponseData<Product>>) => {
      state.product = action.payload;
    },
    setCategory: (
      state,
      action: PayloadAction<Response<ResponseData<Category>>>
    ) => {
      state.category = action.payload;
    },
  },
});

export const { setProducts, setCategory, setProduct } = productsSlice.actions;

export default productsSlice.reducer;
