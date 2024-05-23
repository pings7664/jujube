<script setup lang="ts">
const app = useAppConfig()
const routes = useRoute()
</script>

<template>
  <header class="sticky top-0 z-50 w-full">
    <div class="mx-4 my-2 flex h-12 items-center rounded-full px-6">
      <div class="mr-4 inline-flex w-1/2 items-center justify-start md:mr-1 md:flex">
        <NuxtLink
          to="/"
          class="mr-6 flex items-center space-x-2"
        >
          <Avatar :width="32" :height="32" />
          <span class="hidden font-bold sm:inline-block">{{ app.title }}</span>
        </NuxtLink>
      </div>
      <div class="shrink-0">
        <nav class="flex items-center gap-4 text-sm lg:gap-6">
          <div v-for="item in app.nav" :key="item.label">
            <NuxtLink
              :to="item.href"
              :class="cn(
                'transition-colors hover:text-foreground/80 flex items-center',
                routes.path === item.href ? 'text-foreground font-bold' : 'text-foreground/60',
              )"
              v-if="!item.items"
            >
              <Icon :name="item.icon" class="mr-2 size-4" />
              <span>{{ item.label }}</span>
            </NuxtLink>
            <DropdownMenu v-else>
              <DropdownMenuTrigger
                :class="cn(
                  'transition-colors hover:text-foreground/80 flex items-center',
                  routes.path.startsWith(item.href) ? 'text-foreground font-bold' : 'text-foreground/60',
                )"
              >
                <Icon
                  :name="item.icon"
                  class="mr-2 size-4"
                />
                {{ item.label }}
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  v-for="children in item.items"
                  :key="children.label"
                  :class="cn(
                    'transition-colors hover:text-foreground/80',
                    routes.path === item.href + children.href ? 'text-foreground font-bold' : 'text-foreground/60',
                  )"
                >
                  <NuxtLink
                    :to="item.href + children.href"
                    class="flex w-full items-center justify-center"
                  >
                    <Icon
                      :name="children.icon"
                      class="mr-2 size-4"
                    />
                    {{ children.label }}
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
