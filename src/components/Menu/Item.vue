<script setup lang='ts'>
type Props = {
  name: string;
  slug: string;
  isSelected?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isSelected: false,
})
</script>

<template>
  <RouterLink :to="props.slug"
    class="relative inline-block h-20 px-1 font-bold leading-[5rem] duration-300 hover:text-myYellow"
    active-class="text-myYellow after:absolute after:content-[''] after:h-[3px] after:w-full after:left-0 after:bottom-[1px] after:rounded-t-sm after:bg-myYellow">
    {{ props.name }}
  </RouterLink>
</template>
