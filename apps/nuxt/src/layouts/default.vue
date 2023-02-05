<template>
  <div class="min-h-screen flex flex-col">
    <header class="navbar">
      <div class="navbar-start">
        Jujube
      </div>
      <div class="navbar-center">
        <NuxtLink to="/">Home</NuxtLink>
      </div>
      <div class="navbar-end">
        <input type="text" v-model="searchValue" class="input input-bordered">
      </div>
    </header>
    <main class="flex-1 flex">
      <slot/>
    </main>
    <footer class="h-10 flex items-center justify-center"></footer>
  </div>
</template>

<script setup lang="ts">
  const searchValue = ref('')
</script>

<style scoped>
  .navbar {
    @apply w-full h-12 p-2 flex items-center;
  }

  :where(.navbar > *) {
    @apply inline-flex items-center
  }

  .navbar-start {
    width: 50%;
    justify-content: center;
  }

  .navbar-center {
    flex-shrink: 0;
  }

  .navbar-end {
    width: 50%;
    justify-content: flex-end;
  }
</style>
