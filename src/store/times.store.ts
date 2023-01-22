import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseData, TimeForOrder } from "types/body";

export const timesForOrderSlice = createSlice({
  name: "timesForOrder",
  initialState: {
    times: [] as ResponseData<TimeForOrder>[],
  },
  reducers: {
    setTimesForOrder: (
      state,
      action: PayloadAction<ResponseData<TimeForOrder>[]>
    ) => {
      state.times = action.payload;
    },
  },
});

export const { setTimesForOrder } = timesForOrderSlice.actions;

export default timesForOrderSlice.reducer;
