import { api } from "src/api";
import { ContactsBody, Response } from "types/body";
import { AxiosResponse } from "axios";

export const getContacts = (): Promise<
  AxiosResponse<Response<ContactsBody>>
> => {
  return api.get("/api/contact");
};
