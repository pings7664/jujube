<script setup lang="ts">
import LottiesAvatar from '~/assets/lotties/avatar.json'

interface AvatarProps {
  height: number
  width: number
}

defineProps<AvatarProps>()
</script>

<template>
  <client-only>
    <Lottie
      :animation-data="LottiesAvatar"
      :height="height"
      :width="width"
    />
  </client-only>
</template>
