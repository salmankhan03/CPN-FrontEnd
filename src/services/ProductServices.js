import requests from "./httpService";

const ProductServices = {
  getAllProducts: async ({ page, limit, category, title, price }) => {
    const searchCategory = category !== null ? category : "";
    const searchTitle = title !== null ? title : "";
    const searchPrice = price !== null ? price : "";

    return requests.get(
      `/product/list?page=${page}&pageSize=${limit}`
    );
  },

  getProductById: async (id) => {
    return requests.get(`/product/${id}/data`);
  },
  addProduct: async (body) => {
    return requests.post("/product/save", body);
  },
  addAllProducts: async (body) => {
    return requests.post("/products/all", body);
  },
  updateProduct: async (id, body) => {
    return requests.patch(`/products/${id}`, body);
  },
  updateManyProducts: async (body) => {
    return requests.patch("products/update/many", body);
  },
  updateStatus: async (id, body) => {
    return requests.put(`/products/status/${id}`, body);
  },

  deleteProduct: async (id,body) => {
    return requests.delete(`/product/${id}/delete`, body);
  },
  deleteManyProducts: async (body) => {
    return requests.post("/product/multiple_delete", body);
  },
};

export default ProductServices;
