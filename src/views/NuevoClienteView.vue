<template>
    <div>
        <RouterLink to="inicio">
            Volver
        </RouterLink>

        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit type="form">
                    <FormKit type="text" label="Nombre" placeholder="Nombre de cliente" validation="required"
                    :validation-messages="{ required: 'El Nombre del cliente es obligatorio'}"/>
                    <FormKit type="text" label="Apellido" placeholder="Apellido de cliente" validation="required"
                    :validation-messages="{ required: 'El Apellido del cliente es obligatorio'}"/>
                    <FormKit type="email" label="Email" placeholder="Email de cliente" validation="required|email"
                    :validation-messages="{ required: 'El Email del cliente es obligatorio', email: 'Coloca un email válido'}"/>
                    <FormKit type="text" label="Teléfono" placeholder="Teléfono: XXX-XXX-XXX" validation="?matches:/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/"
                    :validation-messages="{ matches: 'El formato no es válido'}"/>
                </FormKit>
            </div>
        </div>
    </div>
</template>

<script setup>
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';
    import { FormKit }  from '@formkit/vue';

    defineProps({
        titulo: {
            type: String,
        }
    });
</script>

<style>
    .formkit-wrapper {
        max-width: 100%;
    }
</style>