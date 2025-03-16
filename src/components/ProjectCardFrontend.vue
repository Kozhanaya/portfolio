<script setup>
import BtnOutline from './BtnOutline.vue';
</script>

<template>
  <div>
    <!-- head -->
    <div>
      <!-- get src via props -->
      <!-- <img src="" alt=""> -->
      <div class="bg-gray-800 aspect-square xs:aspect-video rounded-4xl"></div>
    </div>

    <!-- body -->
    <div class="mt-12 flex flex-col gap-8 items-start">
      
      <!-- title -->
      <div class="flex flex-wrap gap-4 justify-between self-stretch">
        <p class="text-4xl font-bold">
          <slot name="name">Default name</slot>
        </p>

        <!-- link to website -->
        <a href="#" target="_blank"
          class="cursor-pointer inline-flex items-center gap-2 text-custom-blue-gray opacity-75 hover:text-white hover:opacity-100 transition-all duration-200 ease-out">

          <!-- link name -->
          <span href="#" target="_blank" class="text-2xl">
            <slot name="link">Default link</slot>
          </span>

          <!-- link icon -->
          <span class="self-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </span>

        </a>
      </div>

      <!-- description -->
      <p class="whitespace-pre-wrap text-xl text-custom-blue-gray">
        <slot name="description">Default description</slot>
      </p>

      <BtnOutline class="text-xl" role="link">
        <slot name="button">Default button</slot>
      </BtnOutline>
    </div>
  </div>
</template>

<style scoped></style>