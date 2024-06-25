<script setup lang="ts">
import { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'
import { type AvatarVariants, avatarVariants } from '.'

type AvatarProps = {
  src?: string;
  class?: HTMLAttributes['class'];
  variant?: AvatarVariants['variant']
}
const props = withDefaults(defineProps<AvatarProps>(), {})
</script>

<template>
  <img :src="props.src" :class="cn(avatarVariants({ variant }), props.class)" />
</template>
