import { api } from "src/api";
import { ArrayResponse, TimeForOrder } from "types/body";
import { AxiosResponse } from "axios";

export const getTimesForOrder = (): Promise<
  AxiosResponse<ArrayResponse<TimeForOrder>>
> => {
  return api.get("/api/time-for-orders");
};
