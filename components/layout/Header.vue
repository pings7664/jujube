<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { cn } from '~/lib/utils'

const app = useAppConfig()

const routes = useRoute()
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div class="mx-4 my-2 flex h-12 items-center rounded-full bg-foreground px-6 text-background">
      <div class="mr-4 hidden md:mr-1 md:flex">
        <NuxtLink
          to="/"
          class="mr-6 flex items-center space-x-2"
        >
          <span class="hidden font-bold sm:inline-block">{{ app.title }}</span>
        </NuxtLink>
        <nav class="flex items-center gap-4 text-sm lg:gap-6">
          <div
            v-for="item in app.nav"
            :key="item.text"
          >
            <NuxtLink
              v-if="!item.items"
              :to="item.link"
              :class="cn(
                'transition-colors hover:text-background/80 flex items-center',
                routes.path === item.link ? 'text-background' : 'text-background/60',
              )"
            >
              <Icon
                :icon="item.icon"
                class="mr-2 size-4"
              />
              {{ item.text }}
            </NuxtLink>
            <DropdownMenu v-else>
              <DropdownMenuTrigger
                :class="cn(
                  'transition-colors hover:text-background/80 flex items-center',
                  routes.path.startsWith(`/${item.text}`) ? 'text-background' : 'text-background/60',
                )"
              >
                <Icon
                  :icon="item.icon"
                  class="mr-2 size-4"
                />
                {{ item.text }}
              </DropdownMenuTrigger>
              <DropdownMenuContent class="bg-foreground">
                <DropdownMenuItem
                  v-for="children in item.items"
                  :key="children.text"
                  :class="cn(
                    'transition-colors hover:text-background/80',
                    routes.path === item.link ? 'text-background' : 'text-background/60',
                  )"
                >
                  <NuxtLink
                    :to="children.link"
                    class="flex w-full items-center justify-center"
                  >
                    <Icon
                      :icon="children.icon"
                      class="mr-2 size-4"
                    />
                    {{ children.text }}
                  </NuxtLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
      <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
        <nav class="flex items-center space-x-4">
          <NuxtLink
            :to="app.link.github.href"
            target="_blank"
            class="flex items-center"
          >
            <ClientOnly>
              <Icon
                :icon="app.link.github.icon"
                class="size-5"
              />
            </ClientOnly>
          </NuxtLink>
          <ThemeToggle />
        </nav>
      </div>
    </div>
  </header>
</template>
