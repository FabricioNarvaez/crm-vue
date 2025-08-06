<template>
    <div>
        <RouterLink to="agregar-cliente">
            Agregar Cliente
        </RouterLink>

        <Heading>{{ titulo }}</Heading>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';
    import { onMounted } from 'vue';

    defineProps({
        titulo: {
            type: String
        }
    });

    onMounted(() => {
        const Api_URL = import.meta.env.VITE_API_URL;
        axios.get(`${Api_URL}/clientes`)
            .then(({ data }) => {
                
            })
            .catch(error => {
                console.error('Error al obtener los datos de clientes:', error);
            });
    })
</script>