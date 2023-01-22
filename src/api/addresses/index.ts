import { api } from "src/api";
import { Address, ArrayResponse } from "types/body";
import { AxiosResponse } from "axios";

export const getAddresses = (): Promise<
  AxiosResponse<ArrayResponse<Address>>
> => {
  return api.get("/api/addresses");
};
