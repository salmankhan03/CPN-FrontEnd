import requests from "./httpService";
const StaticPageServices = {
  getAllTemplates: async (data)=> {
    return requests.get(`/temp/template/list?page=${data.page}&pageSize=${data.limit}`);
  },
  getTemplatesById: async (id) => {
    return requests.get(`/temp/template/${id}/data`);
  },
//   addUpdateBrand: async (body) => {
//     return requests.post("/product-brand/save", body);
//   },
  
//   deleteBrands: async (id,body) => {
//     return requests.delete(`/product-brand/${id}/delete`, body);
//   },
//   deleteManyBrands: async (body) => {
//     return requests.post("/product-brand/multiple-delete", body);
//   },

};
export default StaticPageServices;
