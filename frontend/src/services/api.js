import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // adjust port if needed
});

export const getProducts = () => API.get("/products");
