<script setup lang='ts'>
import { ref } from "vue";
import { Moon, Sun } from "lucide-vue-next"

import { Item } from "."
import { Switch } from '@/components/ui/switch'

const menus = [
  {
    id: "home",
    name: "Home",
    slug: "/",
  },
  {
    id: "contents",
    name: "Contents",
    slug: "/contents",
  },
  {
    id: "about",
    name: "About me",
    slug: "/about",
  }
]

const selectedMenu = ref("home")

function handleSelectMenuItem(value: string) {
  selectedMenu.value = value
}
</script>

<template>
  <header class="w-full h-20 border-b border-zinc-200">
    <div class="flex items-center justify-between h-20 max-w-screen-xl mx-auto px-4">
      <RouterLink to="/" class="font-bold text-2xl leading-loose">
        EnglishTo<span class="rounded-full bg-myYellow">day</span>
      </RouterLink>
      <nav class="flex items-center gap-8 h-20">
        <Item @click="handleSelectMenuItem(menu.id)" v-for="menu in menus" :key="menu.id" :name="menu.name"
          :slug="menu.slug" :is-selected="menu.id === selectedMenu" />
      </nav>
      <div class="flex items-center gap-2">
        <Sun :size="20" />
        <Switch />
        <Moon :size="20" />
      </div>
    </div>
  </header>
</template>
