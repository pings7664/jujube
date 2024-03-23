<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'

const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <Button
    class="w-9 h-9"
    aria-label="Toggle dark mode"
    variant="ghost"
    size="icon"
    @click="toggleColorMode"
  >
    <Icon
      :icon="colorMode.preference === 'dark' ? 'radix-icons:sun' : 'radix-icons:moon'"
      class="w-5 h-5 text-foreground"
    />
  </Button>
</template>
