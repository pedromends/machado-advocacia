<template>
    <button class="md:w-auto md:py-0 rounded-6xl flex justify-center">
        <p class="rounded-7xl items-center flex text-base justify-center leading-4 font-medium text-center vsm:text-sm"
        @click="scrollToContact" :class="classExtra">{{ title }}</p>
    </button>
</template>

<script setup>
defineProps({
    classExtra: String,
    title: String
})

</script>