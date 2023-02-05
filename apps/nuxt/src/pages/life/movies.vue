<template>
  <div class="grid grid-cols-10 gap-4">
    <div v-for="item in data.results" :key="item.id" class="rounded shadow-2xl">
      <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`" :alt="item.title"/>
      <div>{{ item.title }}</div>
<div>{{ item.release_date}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const {data} = await useFetch('/api/movies/movies')
  console.log(data.value)
</script>

<style scoped>

</style>
