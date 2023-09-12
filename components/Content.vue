<template>
  <div
    id="content"
    class="content-section mb-16 flex flex-wrap"
    :class="rowReverse"
  >
    <div
      class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6"
    >
      <div
        class="content-image ripple relative overflow-hidden rounded-lg w-full"
       :data-aos="animatedImage"
      >
        <!-- <img :src="image" class="content-image" alt="Louvre" /> -->
      </div>
    </div>

    <div
    data-aos="fade-down"
      class="flex items-center justify-center w-full shrink-0 grow-0 basis-auto lg:w-6/12"
    >
      <div class="w-4/6 md:py-40 py-28">
        <h1
          class="mt-2 mb-6 text-5xl tracking-tight md:text-6xl xl:text-5xl"
        >
          {{ header }}
        </h1>
        <div class="text-neutral-800 dark:text-neutral-500">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import scrollingDetection from "./utils/scrollingDetection";

const props = defineProps({
  isReverse: Boolean,
  header: String,
  image: String,
});

const rowReverse = computed(() =>
  props.isReverse ? "lg:flex-row-reverse" : ""
);
const animatedImage = computed(() => {
  // scrollingDetection()
  return props.isReverse
    ? "fade-up-right"
    : "fade-up-left";
});
</script>