import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: () => import('../views/ClientesView.vue'),
        props: { titulo: 'Lista de Clientes' }
    },
    {
        path: '/agregar-cliente',
        name: 'agregar-cliente',
        component: () => import('../views/NuevoClienteView.vue'),
        props: { titulo: 'Agregar Cliente' }
    },
    {
        path: '/editar-cliente/:id',
        name: 'editar-cliente',
        component: () => import('../views/EditarClienteView.vue'),
        props: { titulo: 'Editar Cliente' }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
export { router };