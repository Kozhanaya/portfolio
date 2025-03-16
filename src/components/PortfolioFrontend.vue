<script setup>
import ProjectCardFrontend from './ProjectCardFrontend.vue';
</script>

<template>
  <div class="grid w-full grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
    <ProjectCardFrontend v-for="n in 6">
      <template #name>TruckGo</template>
      <template #link>truck-go.ru</template>

      <template #description>An online delivery service for construction materials powered with AI.
        The design was done by me, and I have been working on this project for over a year.</template>

      <template #button>See Demo</template>
    </ProjectCardFrontend>
  </div>
</template>

<style scoped></style>