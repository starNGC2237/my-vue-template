import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import Home from '@/views/AppHome.vue';
import Pinia from '@/views/AppPinia.vue';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/pinia',
		name: 'Pinia',
		component: Pinia
	},
	{
		path: '/axios',
		name: 'Axios',
		component: async () => await import('@/views/AppAxios.vue') // 懒加载组件
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
