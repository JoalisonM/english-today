<script setup lang="ts">
import { computed } from 'vue'
import { contents } from '@/data/contents';
import { useRoute } from 'vue-router';

const route = useRoute()

const contentId = computed(() => route.params.id)

const content = computed(() => contents.find(content => content.id === contentId.value))
</script>

<template>
  <div class="flex max-w-screen-xl mx-auto px-4 py-6 h-[calc(100vh-5rem)]">
    <h1>{{ content?.title }}</h1>
  </div>
</template>