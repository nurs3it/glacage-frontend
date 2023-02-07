import { greenApi, idInstance, apiTokenInstance } from "src/api";
import { Response, WhatsAppMessageResponse } from "types/body";
import { AxiosResponse } from "axios";

export const sendMessageToWhatsApp = (
  number,
  message
): Promise<AxiosResponse<Response<WhatsAppMessageResponse>>> => {
  return greenApi.post(
    `/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
    {
      chatId: number.replace(/[^0-9]/g, "") + "@c.us",
      message,
    }
  );
};
