<template>
  <div
    class="banner relative bg-cover bg-no-repeat mb-64"
  >
    <div
      data-aos="flip-up"
      class="banner-content absolute lg:top-3/4 lg:left-2/4 top-2/4 left-0/4 lg:w-2/6 md:w-3/6 md:left-1/4 px-10 py-8 overflow-hidden"
    >
      <div class="text-left md:px-12">
        <h1 class="mt-2 mb-6 font-bold text-3xl tracking-tight md:text-3xl xl:text-3xl">
          A COMPREHENSIVE PROGRAM TO FACILITATE RELOCATING TO CYPRUS WITH YOUR
          FAMILY
        </h1>
        <p class="mb-8 text-neutral-800 dark:text-neutral-500">
          If you're considering relocating with your family, the stunning island
          of Cyprus is definitely worth exploring this
        </p>
        <button @click="scrollTo" class="banner-direction-button">
          &darr;
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
function scrollTo() {
  if (document) {
    document
      .getElementById("content")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
</script>