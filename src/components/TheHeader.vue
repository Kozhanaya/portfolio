<script setup>

</script>

<template>
  <header>
    <div class="flex flex-col items-center pt-16 pb-8">
      <nav>
        <ul class="flex justify-center gap-4 text-xl font-bold uppercase 2xs:gap-8 xs:gap-12 xs:text-2xl">
          <li>
            <RouterLink class="inline-block after:pb-1 router-link" to="/">Portfolio</RouterLink>
          </li>
          <li>
            <RouterLink class="inline-block after:pb-1 router-link" to="/about">About</RouterLink>
          </li>
          <li>
            <RouterLink class="inline-block after:pb-1 router-link" to="/contacts">Contacts</RouterLink>
          </li>
        </ul>
      </nav>



      <div class="flex flex-col items-center gap-6 mt-16 profile">
        <div class="relative">
          <div class="profile__picture w-[200px] h-[200px] bg-sky-400 rounded-4xl">
            <!-- <img src="" alt=""> -->
          </div>

          <div class="absolute bottom-0 right-0 profile__status p-0.5 bg-custom-blue rounded-full">
            <span class="relative flex size-6 m-0.5">
              <span class="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping"></span>
              <span class="relative inline-flex bg-green-500 rounded-full size-6"></span>
            </span>
          </div>
        </div>


        <div class="mt-6 profile__name">
          <h1 class="text-2xl font-bold uppercase 2xs:text-3xl xs:text-4xl">Suman Muhidinova</h1>
          <!-- <p class="opacity-50 text-end">also known as JennyTay</p> -->
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.router-link:after {
  display: block;
  content: '';
  border-bottom: solid 4px;
  border-image: var(--sky-magenta-yellow-gradient) 1 stretch;
  transform: scaleX(1);
  transition: transform 250ms ease-in-out;
}

.router-link:not(.router-link-active):after {
  transform: scaleX(0);
}

.router-link:hover:after {
  transform: scaleX(1);
}
</style>