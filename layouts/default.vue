<script setup lang="ts">
const config = useAppConfig()
</script>

<template>
  <div class="">
    <header class="navbar">
      <div class="navbar-start">
        <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">{{ config.title }}</NuxtLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li v-for="nav in config.nav" :key="nav.text">
            <NuxtLink :to="nav.link" v-if="!nav.items">
              {{ nav.text }}
            </NuxtLink>
            <details v-else>
              <summary>{{ nav.text }}</summary>
              <ul class="p-2">
                <li v-for="item in nav.items" :key="item.text">
                  <NuxtLink :to="nav.link + item.link">{{ item.text }}</NuxtLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <i class="i-ri-search-line w-5 h-5"/>
        </button>
        <button class="btn btn-ghost btn-circle">
          <NuxtLink class="i-simple-icons-github w-5 h-5" :to="config.link.github" target="_blank"/>
        </button>
      </div>
    </header>
    <main>
      <slot/>
    </main>
    <footer></footer>
  </div>
</template>

<style scoped>

</style>
