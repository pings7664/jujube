<script setup lang="ts">
const app = useAppConfig()
</script>

<template>
  <footer class="py-6 md:px-8 md:py-0">
    <div class="container flex flex-col items-center justify-between gap-4 md:h-12 md:flex-row">
      <p class="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
        Built by
        <NuxtLink
          :to="app.link.x.href"
          target="_blank"
          rel="noreferrer"
          class="font-medium underline underline-offset-4"
        >
          {{ app.author }}
        </NuxtLink>
        . The source code is available on
        <NuxtLink
          :to="app.link.github.href"
          target="_blank"
          rel="noreferrer"
          class="font-medium underline underline-offset-4"
        >
          GitHub
        </NuxtLink>
        .
      </p>
    </div>
  </footer>
</template>

<style scoped>

</style>
