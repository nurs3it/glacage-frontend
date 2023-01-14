import axios from "axios";

export const BASE_URL = "https://glacage-api.herokuapp.com";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
