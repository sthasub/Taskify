import api from "../../services/api";

export const getAllProducts = async () => {
  return await api.get("products");
};

export const getProductsById = async (id) => {
  return await api.get(`products/${id}`);
};
