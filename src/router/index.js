import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: () => import('../views/ClientesView.vue'),
    },
    {
        path: '/agregar-cliente',
        name: 'agregar-cliente',
        component: () => import('../views/NuevoClienteView.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
export { router };