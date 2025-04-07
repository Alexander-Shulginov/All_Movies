<script setup lang="ts">
const { width = 160, height = 36 } = defineProps<{
    width?: number
    height?: number
}>()
</script>

<template>
    <NuxtLink to="/">
        <svg-icon :width="width" :height="height" name="logo" />
    </NuxtLink>
</template>
