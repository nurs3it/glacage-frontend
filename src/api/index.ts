import axios from "axios";

export const BASE_URL = "https://api.glacage.kz";
export const GREEN_API_URL = "https://api.green-api.com";
export const idInstance = "1101790977";
export const apiTokenInstance =
  "24b73e312a21416ba573a510723e1a515e7a3c5c2a764a3eb3";

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
