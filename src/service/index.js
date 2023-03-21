import axios from 'axios';

const API = axios.create({
    // baseURL: 'https://ecodashboard-backend.onrender.com/api'
    baseURL: 'http://localhost:5000/api'
});

export const getProducts = (pageNum) => API.get(`/products/allproducts?pageNum=${pageNum || 1}`);
export const getSingleProduct = (id) => API.get(`/products/singleproduct/${id}`);

export const bestSellers = () => API.get('products/bestsellers');