import { api } from "src/api";
import { ArrayResponse, Category } from "types/body";
import { AxiosResponse } from "axios";

export const getCategories = (): Promise<
  AxiosResponse<ArrayResponse<Category>>
> => {
  return api.get("/api/categories?populate=*");
};
