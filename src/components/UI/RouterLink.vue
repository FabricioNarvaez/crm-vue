<template>
    <div>
        <RouterLink :to="{ name: to }" class="block md:inline-block rounded bg-blue-600 py-2 px-3 text-white 
        uppercase font-bold hover:bg-blue-700 text-sm shadow">
            <slot></slot>
        </RouterLink>
    </div>
</template>

<script setup>
    defineProps({
        to: {
            type: String,
            required: true
        }
    });
</script>