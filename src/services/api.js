import axios from "axios";

const api = axios.create({
baseURL: "https://furniture-store-backend-muci.onrender.com/api/",

  headers: {
    "Content-Type": "application/json",
  },
});

// Categories
export const fetchCategories = () => api.get("categories/");

// Products
export const fetchProducts = () => api.get("products/");
export const fetchProductDetail = (id) => api.get(`products/${id}/`);

// Inquiry
export const createInquiry = (data) =>
  api.post("inquiries/create/", data);

export default api;
