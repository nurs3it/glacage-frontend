import axios from "axios";

export const BASE_URL = "https://glacage.onrender.com";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
