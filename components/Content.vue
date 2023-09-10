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
        class="ripple relative overflow-hidden rounded-lg w-full"
        :class="animatedImage"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img :src="image" class="content-image" alt="Louvre" />
      </div>
    </div>

    <div
      class="flex items-center justify-center w-full shrink-0 grow-0 basis-auto lg:w-6/12"
    >
      <div class="w-4/6">
        <h1
          class="mt-2 mb-6 text-5xl font-bold tracking-tight md:text-6xl xl:text-5xl"
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
    ? "animate__animated animate__fadeInRight"
    : "animate__animated animate__fadeInLeft";
});
</script>