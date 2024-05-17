<template>
    <div class="flex flex-row container text-start vsm:h-10 vsm:p-3 vsm:rounded-b-sm">
      <img :src="image" class="w-10 h-10"/>
      <p class="pl-4 pt-2 w-56 ml-4 vsm:hidden">{{title}}</p>
    </div>
</template>

<script setup>
defineProps({
    image: String,
    title: String,
})
</script>