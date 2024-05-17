<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'Starvis',
  ogTitle: 'Starvis',
  description: 'Desenvolvemos tudo o que seu MVP inicial precisa e aceleramos o crescimento da sua startup com suporte técnico especializado.',
  ogDescription: 'Desenvolvemos tudo o que seu MVP inicial precisa e aceleramos o crescimento da sua startup com suporte técnico especializado.',
  // ogImage: 'images/devices.png',
  // twitterCard: 'summary_large_image',
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>