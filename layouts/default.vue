<script setup lang="ts">

</script>

<template>
  <div class="flex min-h-screen flex-col bg-background">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
