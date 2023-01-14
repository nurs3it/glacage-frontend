import { api } from "src/api";
import { ArrayResponse, Product } from "types/body";
import { AxiosResponse } from "axios";

export const getProductsByCategoryId = (
  id: string
): Promise<AxiosResponse<ArrayResponse<Product>>> => {
  return api.get(`/api/products?populate=*&filters[category]=${id}`);
};
