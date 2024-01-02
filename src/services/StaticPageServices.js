import requests from "./httpService";
const StaticPageServices = {
  getAllTemplates: async (data)=> {
    return requests.get(`/temp/template/list?page=${data.page}&pageSize=${data.limit}`);
  },
  getTemplatesById: async (id) => {
    return requests.get(`/temp/template/${id}/data`);
  },
  addUpdateTemplates: async (body) => {
    return requests.post("/temp/template/save", body);
  },
  
  deleteTemplates: async (id,body) => {
    return requests.delete(`/temp/template/${id}/delete`, body);
  },
  deleteManyTemplates: async (body) => {
    return requests.post("/temp/template/multiple-delete", body);
  },

};
export default StaticPageServices;
