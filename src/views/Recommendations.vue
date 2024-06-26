<script setup lang="ts">
import { recommendations } from "@/data/recommendations"
</script>

<template>
  <div class="flex flex-col items-center gap-12 mt-12 mb-24 w-full">
    <div class="flex flex-col justify-center gap-12 max-w-screen-md">
      <h1 class="font-extrabold text-4xl leading-normal">
        Recommendations
      </h1>

      <p class="font-serif font-normal leading-loose whitespace-pre-line text-xl text-zinc-800">
        Here you'll find a curation of websites and apps that I recommend and are part of my personal study collection.
      </p>

      <section class="grid grid-cols-3 gap-4">
        <a v-for="recommendation in recommendations" :key="recommendation.id" :href="recommendation.href"
          target="_blank"
          class="flex flex-col justify-center gap-2 rounded-lg shadow-sm border border-zinc-200 bg-zinc-50 p-4">
          <img :src="recommendation.image" class="h-36">
          <h3 class="font-semibold text-lg text-zinc-700">{{ recommendation.title }}</h3>
          <p class="text-sm text-zinc-500">
            {{ recommendation.description }}
          </p>
        </a>
      </section>
    </div>
  </div>
</template>
