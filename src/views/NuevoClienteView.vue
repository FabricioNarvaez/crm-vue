<template>
    <div>
        <RouterLink to="inicio">
            Volver
        </RouterLink>

        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <FormKit type="form">
                <FormKit type="text" label="Nombre" placeholder="Nombre de cliente" validation="required"
                :validation-messages="{ required: 'El Nombre del cliente es obligatorio'}"/>
            </FormKit>
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