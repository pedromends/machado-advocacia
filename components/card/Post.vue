<template>
    <main class="w-80 h-auto mx-auto flex justify-center flex-col gap-3 hover:bg-gray-200 transition duration-200 rounded-lg p-2 vsm:w-48">
        <img :src="image" class="vsm:w-72 vsm:h-32 self-center rounded-lg"/>
        <p class="text-gray-400">{{ subtitle }}</p>
        <h1 class="text-2xl vsm:text-base">{{ title }}</h1>
        <p class="vsm:text-sm">{{ description }}</p>
    </main>
</template>

<script setup>
defineProps({
    subtitle: String,
    image: String,
    title: String,
    description: String,
})
</script>