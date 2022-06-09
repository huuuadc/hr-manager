import axiosClient from './axiosClient';

// api/productApi.js
const userApi = {
    register: (params) => {
        const url = '/admin/auth/register';
        return axiosClient.post(url, params);
    },

    getAll: (params) => {
        const url = '/client/';
        return axiosClient.get(url);
    },
};

export default userApi;
