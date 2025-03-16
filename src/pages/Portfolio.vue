<script setup>
import BtnOutline from '../components/BtnOutline.vue';
import BtnGroup from '../components/BtnGroup.vue';
import PortfolioFrontend from '../components/PortfolioFrontend.vue';
import Portfolio3DArtist from '../components/Portfolio3DArtist.vue';
</script>

<template>
  <div class="flex flex-col items-start py-12 sm:items-center portfolio-select">
    <p class="self-center mb-8 text-2xl text-center">Choose a portfolio to view</p>

    <BtnGroup>
      <BtnOutline class="active">Frontend Developer</BtnOutline>
      <BtnOutline>3D Artist</BtnOutline>
    </BtnGroup>
  </div>

  <!-- transition v-if -->
  <PortfolioFrontend />
  <!-- <Portfolio3DArtist /> -->
</template>

<style scoped></style>