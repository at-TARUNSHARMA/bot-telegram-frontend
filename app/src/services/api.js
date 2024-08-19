import axios from 'axios';

// Set up axios with base URL for your backend
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true, // For cookies/session handling
});

export const getSettings = () => api.get('/admin/settings');
export const updateSettings = (settings) => api.post('/admin/settings', settings);

export const getUsers = () => api.get('/admin/users');
export const blockUser = (userId) => api.post(`/admin/users/block/${userId}`);

export default api;
