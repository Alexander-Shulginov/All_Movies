<script setup lang="ts">
defineProps<{
    data: any
    status: string
}>()
const maxCard = 8
</script>

<template>
    <div
        class="mb-10 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 md:gap-x-6 md:gap-y-8"
    >
        <FilmCardSkeleton v-if="status === 'pending'" v-for="i in 8" />
        <FilmCard
            v-else
            v-for="i in data"
            :name="i.title"
            :img="i.poster_path"
        />
    </div>
</template>
