import axios from "axios";

export const BASE_URL = "https://glacage-api-production.up.railway.app";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
