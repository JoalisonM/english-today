<script setup lang='ts'>
import { Menu } from '@/components/Menu'
</script>

<template>
  <div class="bg-zinc-100 text-zinc-900 text-base antialiased dark:bg-zinc-900 dark:text-zinc-100">
    <Menu />

    <main>
      <div class="flex max-w-screen-xl mx-auto px-4 py-6 min-h-[calc(100vh-5rem)] h-full">
        <RouterView />
      </div>
    </main>
  </div>
</template>
