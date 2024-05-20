import requests from './httpService';

const BannerServices = {
    getBanners: async () => {
        return requests.get(`/banner/list`);
      },
    addBanners: async (body) => {
      return requests.post('/banner/upload', body);
    },
    deleteBanner: async (id) => {
      return requests.get(`/banner/${id}/delete`);
    },
    deleteManyBanner: async (body) => {
      return requests.post(`/banner/multiple-delete`, body);
    },
};

export default BannerServices;
