import { api } from "src/api";
import { Response } from "types/body";
import { AxiosResponse } from "axios";

export const createOrder = (
  data
): Promise<AxiosResponse<Response<unknown>>> => {
  return api.post("/api/zakazies", data);
};
