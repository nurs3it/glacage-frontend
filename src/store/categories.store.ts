import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, ResponseData } from "types/body";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [] as ResponseData<Category>[],
  },
  reducers: {
    setCategories: (state, action: PayloadAction<ResponseData<Category>[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
