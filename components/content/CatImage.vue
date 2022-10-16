<template>
    <div class="flex flex-wrap w-1/3">
      <p>{{ title }}</p>
      <div class="w-full p-1 md:p-2 relative">
        <img
          class="block object-cover object-center w-full h-full rounded-lg"
          :alt="title"
          :src="src"
          >
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  })
  </script>