import requests from './httpService';

const HeaderSloganServices = {
  getSlogan: async () => {
    return requests.get(`/top-header-slogan/list?page=1&pageSize=200`);
  },
  getSloganById: async (id) => {
    return requests.get(`/top-header-slogan/${id}/get-by-id`);
  },
  addSlogan: async (body) => {
    return requests.post('/top-header-slogan/upsert', body);
  },
  deleteSlogan: async (id) => {
    return requests.get(`/top-header-slogan/${id}/delete`);
  },
  deleteManySlogan: async (body) => {
    return requests.post(`/top-header-slogan/multiple-delete`, body);
  },
};

export default HeaderSloganServices;
