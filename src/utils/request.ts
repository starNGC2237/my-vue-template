import axios from 'axios';
const request = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_API,
	timeout: 5000
});
request.interceptors.request.use((config) => {
	// 在这里加header
	return config;
});
request.interceptors.response.use(
	(response) => {
		return response.data;
	},
	async (error) => {
		// 在这里处理错误
		return await Promise.reject(error);
	}
);

export default request;
