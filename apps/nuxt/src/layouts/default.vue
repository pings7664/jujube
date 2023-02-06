<template>
  <div class="drawer">
    <input type="checkbox" id="my-drawer" class="drawer-toggle"/>
    <div class="drawer-content">
      <header class="navbar">
        <div class="navbar-start">
          <label for="my-drawer" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/>
            </svg>
          </label>
        </div>
        <div class="navbar-center">
          <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">{{ appConfig.title }}</NuxtLink>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
        </div>
      </header>
      <main class="flex-1 flex p-4">
        <slot/>
      </main>
      <footer class="footer footer-center p-4 text-base-content"></footer>
    </div>
    <div class="drawer-side">
      <label class="drawer-overlay" for="my-drawer"/>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content rounded-box m-4">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <NuxtLink to="/">主页</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs">随记</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts">文档</NuxtLink>
        </li>
        <li class="menu-title">
          <div>生活</div>
        </li>
        <li>
          <NuxtLink to="/life/movies">电影</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">关于</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  const appConfig = useAppConfig()
</script>
