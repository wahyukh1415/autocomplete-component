<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

onMounted(() => document.body.classList.add('bg-grey'))
onBeforeUnmount(() => document.body.classList.remove('bg-white'))
</script>

<template>
  <slot/>
</template>