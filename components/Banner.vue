<template>
  <div
    class="banner relative bg-cover bg-no-repeat mb-64"
  >
    <div
      class="banner-content absolute md:top-3/4 md:left-2/4 top-2/4 left-0/4 md:w-2/6 px-10 py-8 overflow-hidden animate__animated animate__fadeIn"
    >
      <div class="text-left md:px-12">
        <h1
          class="mt-2 mb-6 text-5xl font-bold tracking-tight md:text-6xl xl:text-5xl"
        >
        Permanent Cyprus Residency

        </h1>
        <p class="mb-8 text-neutral-800 dark:text-neutral-500">
          A simple proposition: invest in Cyprus’ real estate landscape, and Cyprus will invest in you. Consider Cyprus residency.
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
  if(document) {
    console.log(document)
    document.getElementById('content').scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

</script>