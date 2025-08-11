<template>
    <div>
        <RouterLink to="inicio">
            Volver
        </RouterLink>

        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit type="form" submit-label="Agregar Cliente" @submit="handleSubmit" :value="formData">
                    <FormKit type="text" label="Nombre" name="nombre" placeholder="Nombre de cliente" validation="required"
                    :validation-messages="{ required: 'El Nombre del cliente es obligatorio'}" v-model="formData.nombre"/>
                    <FormKit type="text" label="Apellido" name="apellido" placeholder="Apellido de cliente" validation="required"
                    :validation-messages="{ required: 'El Apellido del cliente es obligatorio'}" v-model="formData.apellido"/>
                    <FormKit type="email" label="Email" name="email" placeholder="Email de cliente" validation="required|email"
                    :validation-messages="{ required: 'El Email del cliente es obligatorio', email: 'Coloca un email válido'}" v-model="formData.email"/>
                    <FormKit type="text" label="Teléfono" name="telefono" placeholder="Teléfono: XXX-XXX-XXX" v-model="formData.telefono"/>
                    <!-- <FormKit type="text" label="Teléfono" name="telefono" placeholder="Teléfono: XXX-XXX-XXX" validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/"
                    :validation-messages="{ matches: 'El formato no es válido'}"/> -->

                    
                    <FormKit type="text" label="Empresa" name="empresa" placeholder="Empresa de cliente" v-model="formData.empresa" />
                    <FormKit type="text" label="Puesto" name="puesto" placeholder="Puesto de cliente" v-model="formData.puesto" />
                </FormKit>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted, reactive } from 'vue';
    import ClienteService from '../services/ClienteService';
    import { FormKit }  from '@formkit/vue';
    import { useRouter, useRoute } from 'vue-router';
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';

    const router = useRouter();
    const route = useRoute();

    const { id } = route.params;

    const formData = reactive({});

    defineProps({
        titulo: {
            type: String,
        }
    });

    const handleSubmit = (cliente) => {
        
    }

    onMounted(() => {
        ClienteService.obtenerClientePorID(id)
            .then(({ data }) => {
                Object.assign(formData, data);
            })
    })
</script>

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>