import axios from "axios";

export const BASE_URL = "https://glacage.onrender.com";

export const MAX_PAGE_SIZE = 10000;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
