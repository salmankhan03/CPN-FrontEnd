import requests from "./httpService";
const BrandServices = {
  getAllBrands: async (data)=> {
    return requests.post(`/product-brand/list?page=${data.page}&pageSize=${data.limit}`);
  },

};
export default BrandServices;
