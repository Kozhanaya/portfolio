<script setup>

</script>

<template>
  <div
    class="inline-flex items-center justify-center text-center p-0.5 rounded-full hover:shadow-[0_0_2px_1px_rgba(0,0,0,1)] shadow-sky-200/50 transition-shadow duration-200">
    <button
      class="uppercase whitespace-nowrap min-w-[200px] text-xl font-bold m-0.5 px-6 py-4 rounded-full bg-custom-blue hover:bg-transparent transition-all duration-200">
      <slot></slot>
    </button>
  </div>
</template>

<style scoped>
div {
  background: var(--sky-magenta-yellow-gradient) !important; /* for a more saturated gradient */
}

.active {
  box-shadow: 0 0 2px 1px color-mix(in oklab, var(--color-sky-200) /* oklch(0.901 0.058 230.902) = #b8e6fe */ 50%, transparent);
}

.active button {
  background-color: transparent;
}
</style>