<script setup lang="ts">

</script>

<template>
  <div class="flex min-h-screen flex-col bg-background">
    <Header />
    <main class="flex-1 border-b bg-background">
      <div class="container flex-1 items-start ">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>
