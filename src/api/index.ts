import axios from "axios";

export const BASE_URL = "https://glacage.onrender.com";
export const GREEN_API_URL = "https://api.green-api.com";
export const idInstance = "1101790970";
export const apiTokenInstance =
  "a3c8565286484939a555c4be9b5e3c91c4bc63808338457890";

export const MAX_PAGE_SIZE = 10000;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const greenApi = axios.create({
  baseURL: GREEN_API_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});
