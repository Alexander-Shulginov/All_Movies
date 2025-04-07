<script setup lang="ts"></script>

<template>
    <div class="mb-10 grid grid-cols-2 gap-x-4 gap-y-5 md:gap-x-6 md:gap-y-8 sm:grid-cols-4">
        <FilmCardSkeleton v-for="i in 8" />
        <FilmCard v-for="i in 8" />
    </div>
</template>
