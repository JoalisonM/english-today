<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import Growth from '@/assets/Growth.svg'
</script>

<template>
  <div class="flex items-center justify-between">
    <section>
      <h1 class="font-extrabold text-6xl leading-normal">Your next step starts <span
          class="text-7xl bg-myYellow">here.</span>
      </h1>
      <p class="font-semibold text-3xl mt-6 text-zinc-500">
        With us you will be learning English easily every day.
      </p>

      <Button class="mt-12 animate-bounce">
        <RouterLink to="/contents" class="flex items-center">
          Go to Contents
          <ArrowRight :size="16" class="ml-2" />
        </RouterLink>
      </Button>
    </section>

    <img :src="Growth" class="size-[600px]">
  </div>
</template>
