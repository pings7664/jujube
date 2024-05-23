<script setup lang="ts">
import LottieAvatar from '~/assets/lotties/avatar.json'

interface AvatarProps {
  height: number
  width: number
}

defineProps<AvatarProps>()
</script>

<template>
  <client-only>
    <Lottie
      :animation-data="LottieAvatar"
      :height="height"
      :width="width"
    />
  </client-only>
</template>
