<script setup lang="ts">
import type { ITabMenu } from '@/components/ActualFilms/ActualFilms.vue'

defineProps<{
    items: ITabMenu[]
}>()
</script>

<template>
    <div
        class="mb-12 flex flex-col items-start justify-between gap-4 xl:flex-row xl:items-center"
    >
        <BaseTitle
            :size="'large'"
            :tag="'h2'"
            :weight="'black'"
            :text="'Сейчас в кино'"
            class="shrink-0"
        />
        <BaseSeparator class="hidden 2xl:block" />
        <BaseTabNav :items="items" />
    </div>
</template>

<style lang="scss" scoped></style>
