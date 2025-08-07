<template>
    <div>
        <RouterLink to="agregar-cliente">
            Agregar Cliente
        </RouterLink>

        <Heading>{{ titulo }}</Heading>

        <div v-if="totalClientes" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                        <tr>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Empresa</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado</th>
                            <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones</th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                            <Cliente v-for="cliente in clientes" :key="cliente.id" :cliente="cliente"></Cliente>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div v-else>
            <p>No hay clientes registrados</p>
        </div>
    </div>
</template>

<script setup>
    import ClienteService from '../services/ClienteService';
    import { onMounted, ref, computed } from 'vue';
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';
    import Cliente from '../components/Cliente.vue';

    const clientes = ref([]);

    defineProps({
        titulo: {
            type: String
        }
    });

    const totalClientes = computed(() => clientes.value.length > 0);

    onMounted(() => {
        ClienteService.obtenerClientes()
            .then(({ data }) => clientes.value = data)
            .catch(error => {
                console.error('Error al obtener los datos de clientes:', error);
            });
    })
</script>