<script setup lang="ts">
import { ptBR } from 'date-fns/locale'
import { RouterLink } from 'vue-router'
import { Bookmark, Search } from 'lucide-vue-next'
import { format, formatDistanceToNow } from 'date-fns'

import { contents } from '@/data/contents'
import { Button } from '@/components/ui/button'
import { InputRoot, Input, InputSuffix } from '@/components/ui/input'

function publishedDateFormat(value: Date) {
  return format(value, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
}

function publishedDateRelativeToNow(value: Date) {
  return formatDistanceToNow(value, {
    locale: ptBR,
    addSuffix: true,
  })
}
</script>

<template>
  <div class="flex flex-col w-full mt-12">
    <div class="flex justify-between">
      <h1 class="font-bold text-3xl">
        Our contents
      </h1>

      <InputRoot class="w-96">
        <Input type="text" placeholder="Search content" />
        <InputSuffix>
          <Button class="rounded-md px-8">
            <Search :size="16" />
          </Button>
        </InputSuffix>
      </InputRoot>
    </div>

    <section class="grid grid-cols-3 gap-4 mt-8">
      <RouterLink :to="`/contents/${content.id}`" v-for="content in contents"
        class="rounded-lg shadow-sm cursor-pointer border border-zinc-200 bg-white">
        <img :src="content.image" class="h-40 rounded-t-lg object-cover">
        <div class="flex flex-col gap-4 p-4">
          <div class="space-y-2">
            <small class="font-semibold text-sm text-zinc-700">{{ content.category }}</small>
            <h1 class="font-bold text-xl">{{ content.title }}</h1>
          </div>

          <div class="flex items-center justify-between text-zinc-400">
            <time :title="publishedDateFormat(content.publishedAt)" :datetime="content.publishedAt.toISOString()">
              {{ publishedDateRelativeToNow(content.publishedAt) }}
            </time>

            <Button variant="ghost" class="h-0 p-0 text-zinc-400 hover:bg-transparent">
              <Bookmark :size="18" />
            </Button>
          </div>
        </div>
      </RouterLink>
    </section>
  </div>
</template>