<script setup>
import { shallowRef, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const layout = shallowRef()
const route = useRoute()

watch(() => route.meta,
  async (meta) => {
    layout.value = (await import(`./layouts/${meta.layout || 'default'}.vue`)).default
  },
  { immediate: true },
)

useHead({
  title: computed(() => route.meta.title ? `${route.meta.title} -  ${appName}` : appName ),
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
