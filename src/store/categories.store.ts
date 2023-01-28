import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Meta, ResponseData } from "types/body";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [] as ResponseData<Category>[],
    categoriesMeta: {} as Meta,
  },
  reducers: {
    setCategories: (state, action: PayloadAction<ResponseData<Category>[]>) => {
      state.categories = action.payload;
    },
    setCategoriesMeta: (state, action: PayloadAction<Meta>) => {
      state.categoriesMeta = action.payload;
    },
  },
});

export const { setCategories, setCategoriesMeta } = categoriesSlice.actions;

export default categoriesSlice.reducer;
