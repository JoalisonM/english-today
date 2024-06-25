<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Bookmark } from 'lucide-vue-next'

import { format } from 'date-fns'
import { contents } from '@/data/contents'
import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/ui/button'

const route = useRoute()

const contentId = computed(() => route.params.id)

const content = computed(() => contents.find(content => content.id === contentId.value))

function formattedDate(value?: Date) {
  if (value) {
    return format(value, "yyyy-MM-dd")
  }

  return ""
}
</script>

<template>
  <div class="flex flex-col items-center gap-12 mt-12">
    <div class="w-full">
      <img :src="content?.image" class="w-full h-72 object-cover">
    </div>

    <section class="flex flex-col justify-center gap-12 max-w-screen-md">
      <div class="flex flex-col gap-4">
        <h1 class="font-extrabold text-4xl leading-normal">
          {{ content?.title }}
        </h1>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <Avatar :src="content?.avatar" variant="bordered" />

            <div class="flex flex-col gap-1 font-semibold">
              {{ content?.author }}
              <span class="text-zinc-400">
                Published in {{ formattedDate(content?.publishedAt) }}
              </span>
            </div>
          </div>

          <Button variant="ghost" class="h-0 p-0 text-zinc-400">
            <Bookmark :size="20" />
          </Button>
        </div>
      </div>

      <p class="font-serif font-normal leading-loose whitespace-pre-line text-xl text-zinc-800">{{ content?.text }}</p>
    </section>
  </div>
</template>