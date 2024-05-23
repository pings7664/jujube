<script setup lang="ts">
import { useToggle } from '@vueuse/core'

const isDark = useDark()

const toggleDark = useToggle(isDark)
</script>

<template>
  <Button
    class="size-9"
    aria-label="Toggle dark mode"
    variant="ghost"
    size="icon"
    @click="toggleDark()"
  >
    <Icon
      :name="isDark ? 'lucide:sun' : 'lucide:moon'"
      class="size-5 text-foreground"
    />
  </Button>
</template>
