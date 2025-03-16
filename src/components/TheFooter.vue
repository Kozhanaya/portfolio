<script setup>

</script>

<template>
  <footer>
    <div class="flex justify-between items-center py-8 gap-4 max-[980px]:flex-col">
      <div class="flex flex-wrap justify-center gap-2">
        <div v-for="n in 8" class="bg-gray-400 w-[32px] h-[32px] rounded-full"></div>
      </div>

      <p class="text-lg text-center opacity-50 2xs:text-xl text-custom-blue-gray">&copy; 2025 Suman Muhidinova / JennyTay</p>
    </div>
  </footer>
</template>

<style scoped></style>