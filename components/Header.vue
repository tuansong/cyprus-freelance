<template>
  <header>
    <nav class="fixed w-full z-10 px-4 lg:px-6 md:py-6 py-4 transition-colors text-white" :class="background">
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <a href="https://flowbite.com" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap "
            >Logo</span
          >
        </a>
        <div class="flex items-center lg:order-2">
          <a
            href="#"
            class= " font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
            @click.prevent="scrollTo('content')"
            >About</a
          >
          <a
            href="#"
            class=" bg-primary-700 hover:bg-primary-800  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
            @click.prevent="scrollTo('cta')"
            >Get in touch</a
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const background = ref('header')

function handleScroll(event) {
  const verticalScrollPx = window.scrollY || window.pageYOffset;
  background.value = verticalScrollPx > 10 ? 'scrolled-header' : 'header'
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function scrollTo(target) {
  if(document) {
    document.getElementById(`${target}`).scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

</script>
