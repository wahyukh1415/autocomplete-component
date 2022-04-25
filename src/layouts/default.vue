<template>
  <TheNavbar />
  <main class="container">
    <slot/>
  </main>
</template>

<style scoped>
  main.container {
    padding-top: 4.5rem;
    padding-bottom: 1rem;
  }
</style>
