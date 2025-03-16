<script setup>

</script>

<template>
  <div class="relative w-full">
    <div class="flex items-center justify-start gap-4 px-4 sm:gap-8 sm:justify-center no-scrollbar py-1">
      <slot></slot>
    </div>

    <div class="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-custom-blue to-custom-blue/0"></div>
    <div class="absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-custom-blue to-custom-blue/0"></div>
  </div>
</template>

<style scoped></style>