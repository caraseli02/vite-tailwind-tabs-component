<template>
  <section class="glass shadow-2xl addClipPath h-96 w-96 mt-4">
    <h3 class="mt-6 mb-8 font-semibold">{{ title }}</h3>
    <slot />
    <p class="w-2/3 mx-auto text-center text-gray-700 font-semibold text-sm">{{ subTitle }}</p>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
    subTitle: {
      type: String,
      default: "Sub Title",
    },
  },
};
</script>

<style scoped></style>
