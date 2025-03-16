<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="font-[Oxanium] max-w-full sm:max-w-[85%] mx-4 sm:mx-auto">
    <TheHeader />

    <main>
      <RouterView />
    </main>

    <TheFooter />
  </div>
</template>

<style scoped></style>