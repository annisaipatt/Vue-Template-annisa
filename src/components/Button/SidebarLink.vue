<script setup>
defineProps(['to', 'name'])
</script>
<template>
  <router-link
    :class="
      $route.name == name
        ? 'bg-blue-500 text-white mt-1 mb-1'
        : 'bg-blue-50  mb-1 mt-1 hover:bg-blue-200 text-whites '
    "
    class="text-sm py-2 px-5 rounded-lg"
    :to="to"
  >
    {{ name }}
  </router-link>
</template>
