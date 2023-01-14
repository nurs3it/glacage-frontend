import { api } from "src/api";
import { AboutBody, Response } from "types/body";
import { AxiosResponse } from "axios";

export const getAbout = (): Promise<AxiosResponse<Response<AboutBody>>> => {
  return api.get("/api/about?populate=*");
};
