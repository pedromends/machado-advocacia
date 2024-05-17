<template>
    <div class="px-4 md:w-1/2 lg:w-1/3 text-start">
        <div class="flex flex-row container mb-3">
          <img :src="image"/>
          <p class="py-3 px-4 text-xl font-bold">{{title}}</p>
        </div>
        <p class="text-light-gray mb-2" v-show="description" >{{description}}</p>
        <a :href="link" v-show="link">
          <p class="text-light-gray text-xs font-light underline underline-offset-1">Ler mais</p>
        </a>
    </div>
</template>

<script setup>
defineProps({
    link: String,
    image: String,
    title: String,
    description: String,
})
</script>