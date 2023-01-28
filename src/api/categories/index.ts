import { api, MAX_PAGE_SIZE } from "src/api";
import { ArrayResponse, Category } from "types/body";
import { AxiosResponse } from "axios";

export const getCategories = (): Promise<
  AxiosResponse<ArrayResponse<Category>>
> => {
  return api.get(
    "/api/categories?populate=*&pagination[pageSize]=" + MAX_PAGE_SIZE
  );
};
