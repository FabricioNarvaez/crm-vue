<template>
    <div>
        <RouterLink to="agregar-cliente">
            Agregar Cliente
        </RouterLink>

        <Heading>{{ titulo }}</Heading>
    </div>
</template>

<script setup>
    import RouterLink from '../components/UI/RouterLink.vue';
    import Heading from '../components/UI/Heading.vue';

    defineProps({
        titulo: {
            type: String
        }
    });
</script>