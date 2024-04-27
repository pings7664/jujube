<script setup lang="ts">
import { Icon } from '@iconify/vue'

const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <Button
    class="size-9"
    aria-label="Toggle dark mode"
    variant="ghost"
    size="icon"
    @click="toggleColorMode"
  >
    <Icon
      :icon="colorMode.preference === 'dark' ? 'lucide:sun' : 'lucide:moon'"
      class="size-5"
    />
  </Button>
</template>
