<script setup lang="ts">
import { cn } from '~/lib/utils'

const app = useAppConfig()
const routes = useRoute()
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div class="mx-4 my-2 flex h-12 items-center rounded-full bg-background px-6 text-foreground">
      <div class="mr-4 inline-flex w-1/2 items-center justify-start md:mr-1 md:flex">
        <NuxtLink
          to="/"
          class="mr-6 flex items-center space-x-2"
        >
          <Avatar
            :height="32"
            :width="32"
          />
          <span class="hidden font-bold sm:inline-block">{{ app.title }}</span>
        </NuxtLink>
      </div>
      <div class="shrink-0">
        <nav class="flex items-center gap-4 text-sm lg:gap-6">
          <div
            v-for="item in app.nav"
            :key="item.text"
          >
            <NuxtLink
              v-if="!item.items"
              :to="item.link"
              :class="cn(
                'transition-colors hover:text-foreground/80 flex items-center',
                routes.path === item.link ? 'text-foreground' : 'text-foreground/60',
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
                  'transition-colors hover:text-foreground/80 flex items-center',
                  routes.path.startsWith(item.link) ? 'text-foreground' : 'text-foreground/60',
                )"
              >
                <Icon
                  :icon="item.icon"
                  class="mr-2 size-4"
                />
                {{ item.text }}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  v-for="children in item.items"
                  :key="children.text"
                  :class="cn(
                    'transition-colors hover:text-foreground/80',
                    routes.path === item.link + children.link ? 'text-foreground' : 'text-foreground/60',
                  )"
                >
                  <NuxtLink
                    :to="item.link + children.link"
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
      <div class="inline-flex w-1/2 items-center justify-end space-x-2 md:justify-end">
        <nav class="flex items-center space-x-4">
          <ThemeToggle />
        </nav>
      </div>
    </div>
  </header>
</template>
