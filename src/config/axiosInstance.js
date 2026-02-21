import axios from 'axios';

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/', // Replace with your API base URL
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // Other default headers can be added here
  },
});


API.interceptors.request.use(
  (config) => {
    // Example: attach auth token from storage
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// Add a response interceptor
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors, e.g., 401 Unauthorized errors
    if (error.response?.status === 401) {
      // You could add logic here to refresh the token
    }
    return Promise.reject(error);
  }
);

export default API;
